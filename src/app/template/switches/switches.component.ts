import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent {

 friden = {
   genero: '',
   notificaciones: false,
 }

 terminosYCondiciones: boolean = false;

}
