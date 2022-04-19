import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap, catchError, of } from 'rxjs';
import { Usuario } from '../interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService  {

  

  // baseUrl: string = 'https://localhost:3000';
  baseUrl: string = 'https://rest-server-by-sergio.herokuapp.com/api';

  

  constructor( private http: HttpClient  ) {
    
   }

  login( email: string , password: string ){
    const url = `${this.baseUrl}/auth/login`;
    return this.http.post<Usuario>(url, {email, password})
          .pipe(
            tap( ({ token, usuario }) => {
              if ( token ){

                localStorage.setItem('token', token);
                localStorage.setItem('email', usuario.email);
                localStorage.setItem('name', usuario.name);
                localStorage.setItem('role', usuario.role);
                localStorage.setItem('uid', usuario.uid);
                
                // this._usuario = {
                //   uid: resp.uid!,
                //   nombre: resp.name!,
                //   email: resp.email!
                // }
              }
            }),
            map( resp => true ),
            catchError ( err => of(false))
          )
  }





}
