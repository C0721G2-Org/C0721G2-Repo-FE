import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [HeaderComponent, FooterComponent, AsideComponent],
    exports: [
        FooterComponent
    ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    ReactiveFormsModule
  ]
})
export class ShareModule { }
