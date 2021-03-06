import { Injectable } from '@angular/core';
import { FormControl, ValidationErrors, AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {

  nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
  emailPattern         : string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  
  constructor() { }

  noPuedeSerStrider(control: FormControl): ValidationErrors | null{
    const valor: string = control.value?.trim().toLowerCase();
    // Para que la validación funcione, esta funcion debe devolver un objeto, o null
    if (valor === 'strider'){
      return {
        noStrider: true
      }
    }
    console.log(valor);
    return null;
  }

  camposIguales(campo1: string, campo2: string){
    return (formGroup: AbstractControl): ValidationErrors | null => {
      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      // console.log(pass1, pass2);

      if (pass1 !== pass2){
        formGroup.get(campo2)?.setErrors({noIguales: true})
        return {noIguales: true}
      } 

      formGroup.get(campo2)?.setErrors(null);

      return null;
    }
  }
  

}
