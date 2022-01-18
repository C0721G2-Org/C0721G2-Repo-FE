import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './helpers/auth.guard';
import {RealListComponent} from './component/real/real-list/real-list.component';

const routes: Routes = [
  {
    path: 'customer',
    loadChildren: () => import('./component/customer/customer.module').then(module => module.CustomerModule),
    canActivate: [AuthGuard],
    data: {expectedRole: ['ROLE_ADMIN', 'ROLE_EMPLOYEE']}
  },
  {
    path: 'employee',
    loadChildren: () => import('./component/employee/employee.module').then(module => module.EmployeeModule),
    canActivate: [AuthGuard],
    data: {expectedRole: 'ROLE_ADMIN'}
  },
  {
    path: 'real-estate-new',
    loadChildren: () => import('./component/real/real.module').then(module => module.RealModule)
  },
  {
    path: 'security',
    loadChildren: () => import('./component/security/security.module').then(module => module.SecurityModule)
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
