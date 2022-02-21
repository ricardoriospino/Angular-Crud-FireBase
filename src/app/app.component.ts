import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SeguridadFirebaseService } from './seguridad-firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'crudF';

  constructor(private seguridadFirebase:SeguridadFirebaseService,
              private router:Router){}

  listarPokemones(){
    this.router.navigate(['listar']);

  }

  agregarPokemon(){
    this.router.navigate(['agregar']);
  }

  autenticar(){
    this.router.navigate(['logueo']);
  }

  isUsuarioLogueado(){
     return this.seguridadFirebase.isAutenticado();
  }
}
