import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent  {

  
  miFormulario: FormGroup = this.fb.group({
    nombre: [ '', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Escape From Tarkov', Validators.required],
      ['Total War Warhammer III', Validators.required],
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);

  get favoritosArr(){
    return this.miFormulario.get('favoritos') as FormArray;
  }

  constructor(private fb: FormBuilder) { }

  guardar(){
    if (this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched();
      return
    }
    else{
      console.log(this.miFormulario.value);
      this.miFormulario.reset();
    }
  }

  campoNotValid(){
    return this.miFormulario.controls.nombre.errors && this.miFormulario.controls.nombre.touched
  }

  agregarFavorito(){
    if(this.nuevoFavorito.invalid) {return}
    
    // this.favoritosArr.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArr.push(this.fb.control(this.nuevoFavorito.value, Validators.required));
    this.nuevoFavorito.reset();
  }

  borrar(i: number){
    this.favoritosArr.removeAt(i);
  }
}
