import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValidarJwtGuard implements CanActivate, CanLoad {
  
  constructor( private router: Router ){}
  
  
  canActivate(): Observable<boolean> | boolean {
      const token = localStorage.getItem('token');
      if( !token ){
        this.router.navigateByUrl('auth/login')
        return false;
      }
      return true;
  }
  canLoad(): Observable<boolean> | boolean {
    const token = localStorage.getItem('token');
      if( !token ){
        this.router.navigateByUrl('auth/login')
        return false;
      }
      return true;
  }
}
