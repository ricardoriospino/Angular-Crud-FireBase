import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SeguridadFirebaseService } from 'src/app/seguridad-firebase.service';

@Injectable({
  providedIn: 'root'
})
export class LogueoGuardiaService implements CanActivate{


  constructor(private router : Router,
              private seguridadFireBase:SeguridadFirebaseService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.seguridadFireBase.isAutenticado()){
        return true;
      }else{
        this.router.navigate(['logueo']);
        return false;
      }
  }
}
