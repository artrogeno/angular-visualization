import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@shared/shared.module';
import { DashComponent } from './dash.component';
import { DashRoutingModule } from './dash-routing.module';

@NgModule({
  declarations: [DashComponent],
  imports: [CommonModule, SharedModule, DashRoutingModule],
})
export class DashModule {}
