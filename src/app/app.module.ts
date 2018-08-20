import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AppRoutingModule } from './app.routes';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';

//Material
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ContactoComponent } from './components/contacto/contacto.component';
//Mapas
import { AgmCoreModule } from '@agm/core';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactoComponent,
    NosotrosComponent,
    PresupuestoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA_8SrQTw3jkiF2Ot4vb2hWuc5kjcjTMug'
    }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
