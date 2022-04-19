import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidarJwtGuard } from './cafeteria/guards/validar-jwt.guard';
import { ValidarLogin } from './auth/guards/validar-login.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule),
    canActivate: [ValidarLogin],
    canLoad    : [ValidarLogin]
    
  },
  {
    path: 'cafeteria',
    loadChildren: () => import('./cafeteria/cafeteria.module').then( m => m.CafeteriaModule),
    canActivate: [ValidarJwtGuard],
    canLoad    : [ValidarJwtGuard]
  },
  { path: '**', redirectTo: 'auth' },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
