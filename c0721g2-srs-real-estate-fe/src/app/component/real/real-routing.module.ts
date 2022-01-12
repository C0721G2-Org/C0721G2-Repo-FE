import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealDetailComponent} from './real-detail/real-detail.component';


const routes: Routes = [
  {path: 'detail/:id', component: RealDetailComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealRoutingModule { }
