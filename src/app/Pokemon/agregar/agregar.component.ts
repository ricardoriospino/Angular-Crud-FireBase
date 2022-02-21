import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/Modelo/pokemon.model';
import { PokemonServicioService } from 'src/app/pokemon-servicio.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  objPokemon : Pokemon ;
  txtNombre : string ;
  txtTipo : string ;

  constructor(private servicioPokemon : PokemonServicioService,
              private router: Router) { }

  ngOnInit(): void {

  }

  guardarPokemon(){
    console.log('Nombre : ' + this.txtNombre + " Tipo : " + this.txtTipo);

    let objPokemon = new Pokemon(this.txtNombre, this.txtTipo);
    this.servicioPokemon.crearPokemon(objPokemon).subscribe (
      data => {
        alert('Se agrego correctamente');
        this.router.navigate(['listar']);
      },
      error => console.log('Error al guardar pokemon ' + error)
    );

  }

}
