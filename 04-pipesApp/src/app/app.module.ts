import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


//Modulo personalizado
// import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { SharedModule } from './shared/shared.module';
import { AppRouterModule } from './app-router.module';
import { VentasModule } from './ventas/ventas.module';

// Cambiar el locale de la app
import localEs from '@angular/common/locales/es-PE';
import localFr from '@angular/common/locales/fr';
import { registerLocaleData } from '@angular/common';
registerLocaleData( localEs );
registerLocaleData( localFr );

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    // PrimeNgModule,
    AppRouterModule,
    SharedModule,
    VentasModule 
  ],
  providers: [
    {
      provide: LOCALE_ID, 
      useValue: 'es-PE' 
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
