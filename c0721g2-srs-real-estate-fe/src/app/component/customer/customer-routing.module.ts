import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CustomerListComponent} from './customer-list/customer-list.component';
import {CustomerDeleteComponent} from './customer-delete/customer-delete.component';
import {CustomerCreateComponent} from './customer-create/customer-create.component';
import {CustomerEditComponent} from './customer-edit/customer-edit.component';
import {CustomerDetailComponent} from './customer-detail/customer-detail.component';


const routes: Routes = [
  {path: 'customer/list', component: CustomerListComponent},
  {path: 'customer/detail/:id', component: CustomerDetailComponent},
  {path: 'customer/delete', component: CustomerDeleteComponent},
  {path: 'customer/create', component: CustomerCreateComponent},
  {path: 'customer/edit', component: CustomerEditComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule {
}
