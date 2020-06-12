import { Component, OnInit } from '@angular/core';

import { SettingI } from '@shared/models';
import { SettingService } from '@shared/services/setting.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
})
export class SettingComponent implements OnInit {
  public toggle: boolean;

  constructor(private settingService: SettingService) {
    this.settingService.currentSetting.subscribe(({ toggle }: SettingI) => {
      this.toggle = toggle;
    });
  }

  ngOnInit() {}

  toggleSetting(): void {
    this.settingService.toggle();
  }
}
