import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutService } from './layout.service';
import { SettingService } from './setting.service';
import { ProfileService } from './profile.service';
import { NotificationService } from './notification.service';

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [LayoutService, SettingService, ProfileService, NotificationService],
})
export class ServicesModule {}
