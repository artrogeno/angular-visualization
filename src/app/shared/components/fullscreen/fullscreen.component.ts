import { Component, OnInit } from '@angular/core';

import { LayoutI } from '@shared/models';
import { LayoutService } from '@shared/services/layout.service';

@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styleUrls: ['./fullscreen.component.scss'],
})
export class FullscreenComponent implements OnInit {
  public fullscreen: boolean;

  constructor(private layoutService: LayoutService) {
    this.layoutService.currentLayout.subscribe(({ fullscreen }: LayoutI) => {
      this.fullscreen = fullscreen;
      this.handlerFullscreen(fullscreen);
    });
  }

  ngOnInit() {}

  toggleAction(): void {
    this.layoutService.toggleFullscreen();
  }

  private handlerFullscreen(fullscreen: boolean): void {
    if (fullscreen) {
      this.openFullscreen();
    } else {
      this.closeFullscreen();
    }
  }

  private openFullscreen(): void {
    const elem = document.documentElement as HTMLElement & {
      mozRequestFullScreen(): Promise<void>;
      webkitRequestFullscreen(): Promise<void>;
      msRequestFullscreen(): Promise<void>;
    };

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }

  private closeFullscreen(): void {
    const elem = document as Document & {
      mozCancelFullScreen(): Promise<void>;
      webkitExitFullscreen(): Promise<void>;
      msExitFullscreen(): Promise<void>;
      webkitIsFullScreen: any;
      mozfullScreen: any;
      fullScreen: any;
    };

    if (elem.fullScreen || elem.mozfullScreen || elem.webkitIsFullScreen) {
      if (elem.exitFullscreen) {
        elem.exitFullscreen();
      } else if (elem.mozCancelFullScreen) {
        elem.mozCancelFullScreen();
      } else if (elem.webkitExitFullscreen) {
        elem.webkitExitFullscreen();
      } else if (elem.msExitFullscreen) {
        elem.msExitFullscreen();
      }
    }
  }
}
