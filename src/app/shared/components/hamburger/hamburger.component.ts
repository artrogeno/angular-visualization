import { Component, OnInit } from '@angular/core';

import { LayoutI } from '@shared/models';
import { LayoutService } from '@shared/services/layout.service';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  public menu: boolean;

  constructor(private layoutService: LayoutService) {
    this.layoutService.currentLayout.subscribe(({ menu }: LayoutI) => {
      this.menu = menu;
    });
  }

  ngOnInit() {}

  toggleAction(): void {
    this.layoutService.toggleMenu();
  }
}
