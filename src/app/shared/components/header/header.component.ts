import { Component, OnInit } from '@angular/core';

import { NotificationI } from '@shared/models';
import { SettingService } from '@shared/services/setting.service';
import { ProfileService } from '@shared/services/profile.service';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public notification: number;

  constructor(
    private settingService: SettingService,
    private profileService: ProfileService,
    private notificationService: NotificationService
  ) {
    this.notificationService.currentNotification.subscribe(({ notification }: NotificationI) => {
      this.notification = notification;
    });
  }

  ngOnInit() {}

  toggleSetting(): void {
    this.settingService.toggle();
  }

  toggleProfile(): void {
    this.profileService.toggle();
  }

  toggleNotification(): void {
    this.notificationService.toggle();
  }
}
