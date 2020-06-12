import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HamburgerComponent } from './hamburger/hamburger.component';
import { SearchComponent } from './search/search.component';
import { FullscreenComponent } from './fullscreen/fullscreen.component';
import { SettingComponent } from './setting/setting.component';
import { ProfileComponent } from './profile/profile.component';
import { NotificationComponent } from './notification/notification.component';

@NgModule({
  declarations: [
    HeaderComponent,
    HamburgerComponent,
    SearchComponent,
    FullscreenComponent,
    SettingComponent,
    ProfileComponent,
    NotificationComponent,
  ],
  imports: [CommonModule],
  entryComponents: [
    HeaderComponent,
    HamburgerComponent,
    SearchComponent,
    FullscreenComponent,
    SettingComponent,
    ProfileComponent,
    NotificationComponent,
  ],
  exports: [
    HeaderComponent,
    HamburgerComponent,
    SearchComponent,
    FullscreenComponent,
    SettingComponent,
    ProfileComponent,
    NotificationComponent,
  ],
})
export class ComponentsModule {}
