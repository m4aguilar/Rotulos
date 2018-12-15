import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { PresupuestoComponent } from './components/presupuesto/presupuesto.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'contacto', component: ContactoComponent},
    { path: 'nosotros', component: NosotrosComponent},
    { path: 'presupuesto', component: PresupuestoComponent},
    { path: 'servicios/catalogos', component: CatalogueComponent},
    { path: 'servicios/:service', component: ServiciosComponent},
    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
