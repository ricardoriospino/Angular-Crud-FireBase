import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './Pokemon/agregar/agregar.component';
import { EditarComponent } from './Pokemon/editar/editar.component';
import { ListarComponent } from './Pokemon/listar/listar.component';
import { LogueoGuardiaService } from './Pokemon/logueo/logueo-guardia.service';
import { LogueoComponent } from './Pokemon/logueo/logueo.component';

const routes: Routes = [
  {path:'logueo',component:LogueoComponent},
  {path:'listar', canActivate:[LogueoGuardiaService] , component:ListarComponent},
  {path:'agregar', canActivate:[LogueoGuardiaService] , component:AgregarComponent},
  {path:'editar', canActivate:[LogueoGuardiaService] , component:EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
