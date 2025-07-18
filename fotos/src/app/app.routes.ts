import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { GaleriaComponent } from './components/galeria/galeria.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreMiComponent } from './components/sobre-mi/sobre-mi.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FooterComponent } from './components/footer/footer.component';


export const routes: Routes = [
     { path: '', redirectTo: 'home', pathMatch: 'full' },  // ruta por defecto
  { path: 'home', component: HomeComponent },
  { path: 'galeria', component: GaleriaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'sobre-mi', component: SobreMiComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'footer', component: FooterComponent }
];
