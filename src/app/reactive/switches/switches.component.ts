import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit{

  miFormulario: FormGroup = this.fb.group({
    genero: ['M', Validators.required],
    notificaciones: [true, Validators.required],
    condiciones: [false, Validators.requiredTrue]
  });

  friden = {
    genero: 'F',
    notificaciones: true,
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      ...this.friden,
      condiciones: false
    });

    this.miFormulario.valueChanges.subscribe(
      ({condiciones, ...rest}) => {
        this.friden = rest;
    });

    // this.miFormulario.get('condiciones')?.valueChanges.subscribe(
    //   newValue => console.log(newValue));
  }
  

  guardar() {
    const formValue = {...this.miFormulario.value};
    delete formValue.condiciones

    this.friden = formValue;
    console.log(formValue)
  }

}
