import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CustomerCreateComponent} from './component/customer/customer-create/customer-create.component';
import {CustomerDetailComponent} from './component/customer/customer-detail/customer-detail.component';


// const routes: Routes = [
//   {path: 'customer', loadChildren: () => import('./component/customer/customer.module').then(module => module.CustomerModule)},
//   {path: 'employee', loadChildren: () => import('./component/employee/employee.module').then(module => module.EmployeeModule)},
//   {path: 'real-estate-new', loadChildren: () => import('./component/real/real.module').then(module => module.RealModule)},
// ];
const routes: Routes = [{
  path: 'customer/create',
  component: CustomerCreateComponent
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
