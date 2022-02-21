import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/usuario.model';
import { SeguridadFirebaseService } from 'src/app/seguridad-firebase.service';

@Component({
  selector: 'app-logueo',
  templateUrl: './logueo.component.html',
  styleUrls: ['./logueo.component.css']
})
export class LogueoComponent implements OnInit {

  txtEmail: string ="";
  txtClave: string ="";

  constructor(private seguridadFireBase : SeguridadFirebaseService ) { }

  ngOnInit(): void {
  }

  autenticar(){

    let usuario = new Usuario(this.txtEmail, this.txtClave);
    this.seguridadFireBase.autenticacionUsuario(usuario);
  }

  logueoGoogle(){

    console.log("Logueo con Google");
    this.seguridadFireBase.logueoGoogle();
  }

}
