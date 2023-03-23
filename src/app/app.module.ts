import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire/compat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContentComponent } from './content/content.component';
import { InicioComponent } from './content/inicio/inicio.component';
import { FooterComponent } from './footer/footer.component';
import { RegistroComponent } from './registro/registro.component';
import { SesionComponent } from './sesion/sesion.component';
import { CargarscriptsService } from './cargarscripts.service';
import { RouterModule,Routes } from '@angular/router';
import { MujerComponent } from './content/mujer/mujer.component';
import { HombreComponent } from './content/hombre/hombre.component';
import { RopadetemporadaComponent } from './content/ropadetemporada/ropadetemporada.component';
import { NovedadesComponent } from './content/novedades/novedades.component';
import { NinosComponent } from './content/ninos/ninos.component';
import { ContactComponent } from './content/contact/contact.component';
import { ExploraComponent } from './content/explora/explora.component';
import { RebajasComponent } from './content/rebajas/rebajas.component';
import { AccesoriosComponent } from './content/accesorios/accesorios.component';
import { ZapatosComponent } from './content/zapatos/zapatos.component';
import { RopadeportivaComponent } from './content/ropadeportiva/ropadeportiva.component';
import { FormsModule } from '@angular/forms';
const appRoutes: Routes = [
  {path : 'inicio', component : InicioComponent},
  {path : 'mujer',component : MujerComponent},
  {path : 'hombre',component : HombreComponent},
  {path : 'niños',component : NinosComponent},
  {path : 'ropa de temporada',component : RopadetemporadaComponent},
  {path : 'novedades',component : NovedadesComponent},
  {path : 'contact',component : ContactComponent},
  {path : 'explora',component : ExploraComponent},
  {path : 'rebajas', component : RebajasComponent},
  {path : 'accesorios', component : AccesoriosComponent},
  {path : 'zapatos', component : ZapatosComponent},
  {path : 'ropa deportiva', component : RopadeportivaComponent},
  {path : 'sesion', component : SesionComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    ContentComponent,
    InicioComponent,
    FooterComponent,
    RegistroComponent,
    SesionComponent,
    MujerComponent,
    HombreComponent,
    RopadetemporadaComponent,
    NovedadesComponent,
    NinosComponent,
    ContactComponent,
    RebajasComponent,
    AccesoriosComponent,
    ZapatosComponent,
    RopadeportivaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBPGLFsGz3i0-Yhrr26dL6x5C-QjjbKebE",
      authDomain: "fashion-girl-s.firebaseapp.com",
      projectId: "fashion-girl-s",
      storageBucket: "fashion-girl-s.appspot.com",
      messagingSenderId: "124032872294",
      appId: "1:124032872294:web:7a7d6d63979f839db7a2a7",
      measurementId: "G-J5KV8S6Q21"
    })
  ],
  providers: [
    CargarscriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
