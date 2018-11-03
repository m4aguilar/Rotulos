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
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Angular2ImageGalleryModule } from 'angular2-image-gallery';
import { GalleryComponent } from './components/gallery/gallery.component'


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactoComponent,
    NosotrosComponent,
    PresupuestoComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MDBBootstrapModule.forRoot(),
    Angular2ImageGalleryModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
