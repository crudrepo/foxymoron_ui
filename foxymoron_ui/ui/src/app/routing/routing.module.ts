import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Ass1Component } from '../ass1/ass1.component';
import { Ass2Component } from '../ass2/ass2.component';
import { Ass3Component } from '../ass3/ass3.component';

// Layouts
export const route : Routes = [
  {
    path: '',
    redirectTo: 'ass1',
    pathMatch: 'full',
  },
  {
    path: 'ass1',
    component: Ass1Component
  },
  {
    path: 'ass2',
    component: Ass2Component
  },
  {
    path: 'ass3',
    component: Ass3Component
  }  
 ];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(route)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class RoutingModule { }
