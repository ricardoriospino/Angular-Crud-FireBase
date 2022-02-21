import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Pokemon/listar/listar.component';
import { AgregarComponent } from './Pokemon/agregar/agregar.component';
import { EditarComponent } from './Pokemon/editar/editar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './Pokemon/menu/menu.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { SeguridadFirebaseService } from './seguridad-firebase.service';
import { PokemonServicioService } from './pokemon-servicio.service';
import { LogueoComponent } from './Pokemon/logueo/logueo.component';

const fireBaseConfig = {
  apiKey: "AIzaSyBZtoNSEnkolOjOLwMk6ff5uWcZDtIKB0o",
  authDomain: "crud-spring-firebase.firebaseapp.com",
  projectId: "crud-spring-firebase",
  storageBucket: "crud-spring-firebase.appspot.com",
  messagingSenderId: "436956358425"
};
@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    AgregarComponent,
    EditarComponent,
    MenuComponent,
    LogueoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(fireBaseConfig),
    AngularFireAuthModule
  ],
  providers: [SeguridadFirebaseService, PokemonServicioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
