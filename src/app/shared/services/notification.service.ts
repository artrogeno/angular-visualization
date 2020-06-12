import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '@environments/environment';
import { NotificationI } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  protected notificationSource = new BehaviorSubject(environment.notification);
  public currentNotification = this.notificationSource.asObservable();
  public notification: NotificationI = environment.notification;

  constructor() {}

  changeNotification(notification: NotificationI): void {
    this.notification = notification;
    this.notificationSource.next(this.notification);
  }

  toggle(): void {
    const notification = { ...this.notification, toggle: !this.notification.toggle, notification: 0 };
    this.changeNotification(notification);
  }
}
