import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeCreateComponent} from './employee-create/employee-create.component';
import {EmployeeEditComponent} from './employee-edit/employee-edit.component';
import {EmployeeDeleteComponent} from './employee-delete/employee-delete.component';
import {AuthGuard} from '../../helpers/auth.guard';


const routes: Routes = [
<<<<<<< HEAD
  {path: 'list', component: EmployeeListComponent},
=======
  {
    path: 'list',
    component: EmployeeListComponent
  },
>>>>>>> 9871c9d8079e42482d5444e1e867d767730fbf1c
  {path: 'create', component: EmployeeCreateComponent},
  {path: 'edit/:id', component: EmployeeEditComponent},
  {path: 'delete/:id', component: EmployeeDeleteComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
