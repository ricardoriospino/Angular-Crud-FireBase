import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from './Modelo/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonServicioService {

  constructor(private httpCliente : HttpClient) { }

  endPoint : string ='http://localhost:8090/apiPokemon';

  obtenerPokemones(){
    console.log("Entro metodo obtenerPokemones - PokemonServicioService  ");
    return this.httpCliente.get<Pokemon[]>(this.endPoint + '/listar');
  }
  crearPokemon(objPokemon: Pokemon){
    console.log("Entro metodo crearPokemon - PokemonServicioService  ");
    return this.httpCliente.post<Pokemon>(this.endPoint + '/add' , objPokemon);
  }
  getPokemonById(id: number){
    console.log("Entro metodo getPokemonById - PokemonServicioService ");
    return this.httpCliente.get<Pokemon>(this.endPoint + '/getPokemon/' + id);
  }
  updatePokemon(objPokemon: Pokemon){
    console.log("Entro metodo updatePokemon - PokemonServicioService ");
    return this.httpCliente.put(this.endPoint + '/update', objPokemon);
  }
  eliminarPokemon(id: number){
    console.log("Entro metodo eliminarPokemon - PokemonServicioService ");
    return this.httpCliente.delete<Pokemon>(this.endPoint + '/delete/' + id);
  }



}
