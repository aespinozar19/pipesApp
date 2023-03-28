import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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

}
