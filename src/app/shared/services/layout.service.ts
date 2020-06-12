import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '@environments/environment';
import { LayoutI } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class LayoutService {
  protected layoutSource = new BehaviorSubject(environment.layout);
  public currentLayout = this.layoutSource.asObservable();
  public layout: LayoutI = environment.layout;

  constructor() {}

  changeLayout(layout: LayoutI): void {
    this.layout = layout;
    this.layoutSource.next(this.layout);
  }

  toggleMenu(): void {
    const layout = { ...this.layout, menu: !this.layout.menu };
    this.changeLayout(layout);
  }

  toggleFullscreen(): void {
    const layout = { ...this.layout, fullscreen: !this.layout.fullscreen };
    this.changeLayout(layout);
  }
}
