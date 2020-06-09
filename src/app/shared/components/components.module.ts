import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { HamburgerComponent } from './hamburger/hamburger.component';

@NgModule({
  declarations: [HeaderComponent, HamburgerComponent],
  imports: [CommonModule],
  entryComponents: [HeaderComponent, HamburgerComponent],
  exports: [HeaderComponent, HamburgerComponent],
})
export class ComponentsModule {}
