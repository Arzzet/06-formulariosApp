import { FormControl } from "@angular/forms";

// manera que est ok para validaciones sencillas ( no servicios o inyecciones)
export const nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';
export const emailPattern:          string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
export const noPuedeSerStrider = (control: FormControl) => {
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

// noPuedeSerStrider(control: FormControl){
//     const valor: string = control.value?.trim().toLowerCase();
//     // Para que la validación funcione, esta funcion debe devolver un objeto, o null
//     if (valor === 'strider'){
//       return {
//         noStrider: true
//       }
//     }
//     console.log(valor);
//     return null;
//   }