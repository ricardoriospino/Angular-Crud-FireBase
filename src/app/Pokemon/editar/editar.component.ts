import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/Modelo/pokemon.model';
import { PokemonServicioService } from 'src/app/pokemon-servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  objPokemon : Pokemon;

  constructor(private servicioPokemon : PokemonServicioService,
              private router : Router) { }

  ngOnInit(): void {
    this.objPokemon = new Pokemon('-','-',0);
    this.mostrarDataPokemon();
  }

  actualizarPokemon(){


    this.servicioPokemon.updatePokemon(this.objPokemon).subscribe(
      data => {
        alert('Se actualizo correctamente');
        this.router.navigate(['listar']);
      },
      error => console.log('Error al actualizar pokemon ' + error)
    );

  }

  mostrarDataPokemon(){
    let id = localStorage.getItem('ls-id');
    console.log(id);
    //casteado de string a number
    this.servicioPokemon.getPokemonById(Number(id)).subscribe(
      data => this.objPokemon = data,
      error => console.log('Error al cargar pokemon ' + error)
    );

  }

}
