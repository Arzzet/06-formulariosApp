import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validators/validaciones';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

// Validacion sencilla desde archivo validator.ts
  // miFormulario = this.fb.group({
  //   nombre: ['', [Validators.required, Validators.pattern(nombreApellidoPattern)]],
  //   email: ['', [Validators.required, Validators.pattern(emailPattern)]],
  //   username: ['', [Validators.required, noPuedeSerStrider]],

  // });
// validacion desde servicio creado (validators.service.ts) mas robusto
  miFormulario = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],

  });
  
  constructor(private fb: FormBuilder,
              private validatorService: ValidatorsService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Iwo Przybyszewski',
      email: 'iwo@test.com',
      username: 'no pongas strider'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid 
        && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
