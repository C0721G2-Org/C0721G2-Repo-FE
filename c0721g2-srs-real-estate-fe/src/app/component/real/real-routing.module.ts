import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealDetailComponent} from './real-detail/real-detail.component';
import {RealListComponent} from './real-list/real-list.component';
import {RealDeleteComponent} from './real-delete/real-delete.component';


const routes: Routes = [
  {path: 'detail/:id', component: RealDetailComponent},
  {path: 'list', component: RealListComponent},
  {path: 'delete', component: RealDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealRoutingModule { }
