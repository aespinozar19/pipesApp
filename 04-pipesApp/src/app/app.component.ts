import { Component, OnInit } from '@angular/core';

import { PrimeNGConfig } from 'primeng/api';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'pipesApp';

  nombre: string = 'Anthony espinoza';
  valor : number = 5205;
  obj = {
    nombre: 'Junior'
  };

  mostrarNombre(){
    console.log(this.nombre);
    console.log(this.valor);
    console.log(this.obj);
  }

  constructor( private primengConfig: PrimeNGConfig ){}

  ngOnInit() {
    this.primengConfig.ripple = true;
  }

}
