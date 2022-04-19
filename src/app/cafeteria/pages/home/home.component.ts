import { Component, OnInit } from '@angular/core';
import { CafeteriaService } from '../../services/cafeteria.service';
import { Usuario } from '../../../auth/interfaces/usuario.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
    .desvanecer{
      opacity: .95;
    }
`]
})
export class HomeComponent implements OnInit {


  usuario!:Usuario;

  constructor( private cafeteriaService: CafeteriaService,
               private router: Router ) { 
   }

  ngOnInit(): void {
    this.usuario = this.cafeteriaService.setUsuario();
  }

  logOut(){
    localStorage.clear();
    this.router.navigateByUrl('')
  }

    


}
