import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '@environments/environment';
import { SettingI } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class SettingService {
  protected settingSource = new BehaviorSubject(environment.setting);
  public currentSetting = this.settingSource.asObservable();
  public setting: SettingI = environment.setting;

  constructor() {}

  changeSetting(setting: SettingI): void {
    this.setting = setting;
    this.settingSource.next(this.setting);
  }

  toggle(): void {
    const setting = { ...this.setting, toggle: !this.setting.toggle };
    this.changeSetting(setting);
  }
}
