import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from 'src/app/Modelo/pokemon.model';
import { PokemonServicioService } from 'src/app/pokemon-servicio.service';

@Component({
  selector: 'app-listar', 
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  lstPokemones : Pokemon []= [];

  constructor(private pokemonServicio:PokemonServicioService,
              private router:Router ) { }

  ngOnInit(): void {
    this.pokemonServicio.obtenerPokemones().subscribe (
      data => this.lstPokemones = data,
      error => console.log('Error al cargar pokemones ' + error)
    );
  }

  cargarPokemon(objPokemon : Pokemon){
    //sesion
    localStorage.setItem("ls-id",objPokemon.id.toString());
    this.router.navigate(['editar']);
  }

  eliminarPokemon(objPokemon : Pokemon){

    this.pokemonServicio.eliminarPokemon(objPokemon.id).subscribe(
      data => {
        alert("Pokemon eliminado correctamente");
        //lista existente le filtra el elemento que recibe como parametro, porque no
        // funciona el navigate hacia la misma pagina
        this.lstPokemones = this.lstPokemones.filter(p=>p!==objPokemon);
      },
      error => console.log('Error al cargar pokemones ' + error)
    );


  }
}
