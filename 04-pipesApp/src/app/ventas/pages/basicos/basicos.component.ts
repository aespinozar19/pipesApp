import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
    
  ]
})
export class BasicosComponent {

  nombreLower   : string = "anthony";
  nombreUpper   : string = "JUNIOR";
  nombreCompleto: string = "AntHoNY EspInOzA";

  fecha: Date = new Date(); //el día de hoy

}
