import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    producto: '',
    precio: null,
    existencias: null
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean{
    return this.miFormulario?.controls.producto?.invalid 
        && this.miFormulario?.controls.producto?.touched;
  }

  precioValido(): boolean{
    return this.miFormulario?.controls.precio?.invalid 
        && this.miFormulario?.controls.precio?.touched;
  }


  // guardar(miFormulario: NgForm){
  guardar(){
    // console.log(this.miFormulario);
    console.log('Posteo Coreecto');
    this.miFormulario.resetForm({
      precio: 0,
      existencias: 0
    });

  }

}
