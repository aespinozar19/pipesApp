import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
    
  ]
})
export class NoComunesComponent {

  boleanoGenero: boolean = false;
  //i18nSelect
  nombre: string = 'Johana';
  genero: string = 'femenino';
  // nombre: string = 'Anthony';
  // genero: string = 'masculino';

  invitacionMapa = {
    'masculino':'invitarlo',
    'femenino':'invitarla'
  };

  //i18nPlural
  clientes: string[] = ['Maria','Pepe Lucho','Juancho Lagarto'];
  clientesMapa = {
    '=0':'no tenemos ningun cliente esperando.',
    '=1':'tenemos 1 cliente esperando',
    'other':'tenemos # clientes esperando',
  }

  cambiarCliente(){
    if(!this.boleanoGenero){
      this.nombre = 'Anthony';
      this.genero = 'masculino';
      this.boleanoGenero = true;
    }
    else
    {
      this.nombre = 'Johana';
      this.genero = 'femenino';
      this.boleanoGenero = false;
    }
    
  }

  borrarCliente(){
    // console.log(this.clientes);
    this.clientes.splice(0,1);
    // console.log(this.clientes);
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Junior',
    edad: 31,
    direccion: 'Lima 32'
  };

  // JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      vuela: true
    },
    {
      nombre: 'Batman',
      vuela: false
    },
    {
      nombre: 'Aquaman',
      vuela: false
    }
  ];

  // Async Pipe
  miObservable = interval(1000)
    .pipe(
      tap( () => console.log('interval'))
    );

  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
      resolve( 'Tenemos data de promesa' )
    }, 3500);
  } );


}
