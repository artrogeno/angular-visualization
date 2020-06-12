interface NotificationItemI {
  title: string;
  describe: string;
  link?: string;
  date?: Date;
}

export interface NotificationI {
  toggle: boolean;
  notification: number;
  listNotification?: NotificationItemI[];
}
