import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
  imports: [SharedModule, AboutRoutingModule],
})
export class AboutModule {}
