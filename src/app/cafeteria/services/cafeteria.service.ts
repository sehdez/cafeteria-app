import { Injectable } from '@angular/core';
import { UsuarioClass, Usuario } from '../../auth/interfaces/usuario.interface';

@Injectable({
  providedIn: 'root'
})
export class CafeteriaService {

  private _usuario!: Usuario;

  getUsuario(){
    return {...this._usuario}
  }


  ngOnInit(): void {
    const token = localStorage.getItem('token');
    if( token ){
      this.setUsuario();
    }
      
  }


  constructor() { }


  
  setUsuario (){
    const usuario :UsuarioClass = {
      email: localStorage.getItem('email')||'',
      name: localStorage.getItem('name')||'',
      role: localStorage.getItem('role')||'',
      uid: localStorage.getItem('uid')||'',
    }
    this._usuario = {
      token : localStorage.getItem('token')||'',
      usuario
    }
    return this.getUsuario();
  } 


}
