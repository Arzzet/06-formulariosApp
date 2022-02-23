import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validators/validaciones';
import { ValidatorsService } from 'src/app/shared/validators/validators.service';
import { EmailValidatorService } from '../../../shared/validators/email-validator.service';

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
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidator]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.validatorService.camposIguales('password', 'password2')]
  });

  

  // get emailErrorMsg(): string{
  //   const errors = this.miFormulario.get('email')?.errors;
  //   if ( errors?.required ){
  //     return 'El email es obligatorio';
  //   } else if ( errors?.pattern ){
  //     return 'El formato no es válido';
  //   } else if ( errors?.emailExiste ){
  //     return 'El email ya está en uso';
  //   } 
  //   return '';
  // }

  get emailErrorMsg(): string{
    return this.miFormulario.get('email')?.hasError('required') ? 'El email es obligatorio' :
           this.miFormulario.get('email')?.hasError('pattern') ? 'El formato no es válido' :
           this.miFormulario.get('email')?.hasError('emailExiste') ? 'El email ya está en uso' :
           '';
  }
  
  constructor(private fb: FormBuilder,
              private validatorService: ValidatorsService,
              private emailValidator: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Iwo Przybyszewski',
      email: 'iwo@test.com',
      username: 'no pongas strider',
      password: '123456',
      password2: '123456'
    })
  }

  campoNoValido(campo: string){
    return this.miFormulario.get(campo)?.invalid 
        && this.miFormulario.get(campo)?.touched;
  }

  // emailRequired(){
  //   return this.miFormulario.get('email')?.hasError('required') 
  //   && this.miFormulario.get('email')?.touched;
  // }

  // emailFormato(){
  //   return this.miFormulario.get('email')?.hasError('pattern') 
  //   && this.miFormulario.get('email')?.touched;
  // }

  // emailExiste(){
  //   return this.miFormulario.get('email')?.hasError('emailExiste') 
  //   && this.miFormulario.get('email')?.touched;
  // }




  submitFormulario(){
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
