import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';
import {UpdatePasswordComponent} from './update-password/update-password.component';


const routes: Routes = [
  {path: 'list', component: CustomerListComponent},
  {path: 'detail/:id', component: CustomerDetailComponent},
  {path: 'delete', component: CustomerDeleteComponent},
  {path: 'create', component: CustomerCreateComponent},
  {path: 'edit', component: CustomerEditComponent},
  {path: 'chang-password', component: UpdatePasswordComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
