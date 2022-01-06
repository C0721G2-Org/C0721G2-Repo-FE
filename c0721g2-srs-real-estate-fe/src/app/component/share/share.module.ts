import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { HeadeComponent } from './heade/heade.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AsideComponent } from './aside/aside.component';


@NgModule({
  declarations: [HeadeComponent, HeaderComponent, FooterComponent, AsideComponent],
  imports: [
    CommonModule,
    ShareRoutingModule
  ]
})
export class ShareModule { }
