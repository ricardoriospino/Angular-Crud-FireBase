import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Modelo/usuario.model';
import { SeguridadFirebaseService } from 'src/app/seguridad-firebase.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  txtEmail : string = "";
  txtClave : string = "";

  constructor(private seguridadFireBase : SeguridadFirebaseService ) { }

  ngOnInit(): void {
  }

  registrarUsuario(){
    console.log("El email es : " + this.txtEmail + " y la clave es : " + this.txtClave );
    let usuario = new Usuario(this.txtEmail , this.txtClave);
    this.seguridadFireBase.altaUsuario(usuario);
    this.txtEmail="";
    this.txtClave="";

  }

  logout(){
    this.seguridadFireBase.logout();
  }

}
