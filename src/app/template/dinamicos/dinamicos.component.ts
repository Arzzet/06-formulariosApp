import { Component, OnInit } from '@angular/core';

interface Friden {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito{
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego: string = '';

  friden: Friden = {
    nombre: 'Iwo',
    favoritos: [
      {id: 1, nombre: 'Escape From Tarkov'},
      {id: 2, nombre: 'Metal Gear Solid IV'},
    ]
  }

  agregarJuego(){
    const nuevoFavorito: Favorito = {
      id: this.friden.favoritos.length + 1,
      nombre: this.nuevoJuego
    }
    this.friden.favoritos.push({...nuevoFavorito});
    this.nuevoJuego = '';
  }

  guardar(){
    console.log('posteado');
  }

  eliminar(indice:number){
    this.friden.favoritos.splice(indice, 1);
  }

}
