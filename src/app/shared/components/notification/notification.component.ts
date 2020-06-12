import { Component, OnInit } from '@angular/core';

import { NotificationI } from '@shared/models';
import { NotificationService } from '@shared/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss'],
})
export class NotificationComponent implements OnInit {
  public toggle: boolean;

  constructor(private notificationService: NotificationService) {
    this.notificationService.currentNotification.subscribe(({ toggle }: NotificationI) => {
      this.toggle = toggle;
    });
  }

  ngOnInit() {}

  toggleNotification(): void {
    this.notificationService.toggle();
  }
}
