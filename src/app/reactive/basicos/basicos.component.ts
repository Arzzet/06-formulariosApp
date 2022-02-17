import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{

  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX4090Ti'),
  //   precio: new FormControl(1200),
  //   existencias: new FormControl('5')
  // });

  miFormulario: FormGroup = this.fb.group({
    nombre: [ , [Validators.required, Validators.minLength(3)]],
    precio: [ , [Validators.min(0), Validators.required]],
    existencias: [ ,[Validators.min(0), Validators.required]]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    // this.miFormulario.reset({
    //   nombre: 'RTX4090Ti',
    //   precio: 1200
    //   // existencias: 5
    // });
  }

  campoNotValid(){
    return this.miFormulario.controls.nombre.errors && this.miFormulario.controls.nombre.touched
  }

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

}
