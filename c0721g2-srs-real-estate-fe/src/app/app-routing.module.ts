import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RealListComponent} from './component/real/real-list/real-list.component';


const routes: Routes = [
  {path: '', component: RealListComponent},
  // {path: 'customer', loadChildren: () => import('./component/customer/customer.module').then(module => module.CustomerModule)},
  // {path: 'employee', loadChildren: () => import('./component/employee/employee.module').then(module => module.EmployeeModule)},
  // {path: 'real-estate-new', loadChildren: () => import('./component/real/real.module').then(module => module.RealModule)},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
