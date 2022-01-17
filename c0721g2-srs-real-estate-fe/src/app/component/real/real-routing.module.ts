import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RealDetailComponent} from './real-detail/real-detail.component';
import {RealListComponent} from './real-list/real-list.component';
import {RealDeleteComponent} from './real-delete/real-delete.component';
import {HistoryPostComponent} from './history-post/history-post.component';
import {RealCreateComponent} from './real-create/real-create.component';
import {ListPostApprovalComponent} from './list-post-approval/list-post-approval.component';


const routes: Routes = [
  {path: 'detail/:id', component: RealDetailComponent},
  {path: 'list', component: RealListComponent},
  {path: 'delete', component: RealDeleteComponent},
  {path: 'post-history/:id', component: HistoryPostComponent},
  {path: 'post', component: RealCreateComponent},
  {path: 'list-post-approval', component: ListPostApprovalComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RealRoutingModule {
}
