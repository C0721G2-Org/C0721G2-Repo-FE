import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeDeleteComponent} from './employee-delete/employee-delete.component';


const routes: Routes = [
  {path: 'list', component: EmployeeListComponent},
  {path: 'create', component: EmployeeCreateComponent},
  {path: 'edit', component: EmployeeEditComponent},
  {path: 'delete', component: EmployeeDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
