import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CafeteriaRoutingModule } from './cafeteria-routing.module';
import { HomeComponent } from './pages/home/home/home.component';


@NgModule({
  declarations: [
  
    HomeComponent
  ],
  imports: [
    CommonModule,
    CafeteriaRoutingModule
  ]
})
export class CafeteriaModule { }
