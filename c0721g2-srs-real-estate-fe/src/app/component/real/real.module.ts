import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RealRoutingModule} from './real-routing.module';
import {RealDetailComponent} from './real-detail/real-detail.component';



@NgModule({
  declarations: [RealDetailComponent],
  imports: [
    CommonModule,
    RealRoutingModule
  ]
})
export class RealModule { }
