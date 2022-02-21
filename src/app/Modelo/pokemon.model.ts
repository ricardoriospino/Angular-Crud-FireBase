export class Pokemon {

  //Los nombres tienen que ser igual a java
  //constructor(public id:number, public nombre: string, public tipo: string ){}

    id: number;
    nombre:string;
    tipo:string;

    constructor(nombre: string, tipo: string, id?: number){
        this.nombre = nombre;
        this.tipo = tipo;
        this.id = id ? id : -1;
    }

}
