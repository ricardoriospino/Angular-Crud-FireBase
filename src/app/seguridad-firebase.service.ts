import { Injectable } from '@angular/core';
import { Usuario } from './Modelo/usuario.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { GoogleAuthProvider } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class SeguridadFirebaseService {

  token:string ="";

  constructor(private afAuth: AngularFireAuth,
              private router : Router) { }

  altaUsuario(usuario :Usuario){
    this.afAuth.createUserWithEmailAndPassword(usuario.email ,
       usuario.clave).
    then(resultado => {
      console.log("Usuario registrado");
      alert("Usuario registrado correctamente");
    }).catch(
      error => {
        let errorCode = error.code;
        console.log('errorCode: '+errorCode);

        if(errorCode == "auth/email-already-in-use"){
          alert("Correo ya registrado")
        }else if(errorCode == "auth/weak-password"){
          alert("Clave debe tener minimo 6 caracteres")
        }else{
          alert("Error al registrar Usuario")
        }
        console.log("Error : ",error.mensage);

      }
    );

  }

  autenticacionUsuario(usuario :Usuario){
    this.afAuth.signInWithEmailAndPassword(usuario.email ,
      usuario.clave).
      then(resultado => {
        console.log("Usuario autentificado");
        resultado.user?.getIdToken().
              then((token) => {
                  this.token = token;
                  console.log('Token obtenido: '+token );
                  this.router.navigate(['listar']);
                });
      }).catch(
        error => {
          let errorCode = error.code;
          console.log('errorCode: '+errorCode);
          if(errorCode=='auth/wrong-password'){
            alert('Usuario y/o clave invalidas.');
          }else{
            alert('Error al loguear usuario!');
          }
          console.log("Error : ",error.mensage);
        }
      );
  }

  logout(){
    this.afAuth.signOut().then(() => {

      this.token ="";
      this.router.navigate(['logueo']);
    }).catch(error => console.log("Error de logout: "+error));

  }

  getIdToken(){
    return this.token;
  }

  isAutenticado(){
    return (this.token != null && this.token !="");
  }

  logueoGoogle(){

    return this.afAuth.signInWithPopup(new GoogleAuthProvider())
    .then((result) => {
        console.log('logged in!');
        result.user?.getIdToken().
              then((token) => {
                  this.token = token;
                  console.log('Token obtenido: '+token );
                  this.router.navigate(['listar']);
                });
    }).catch((error) => {
        console.log(error)
    })
  }
}
