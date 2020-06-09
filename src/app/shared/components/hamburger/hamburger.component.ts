import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hamburger',
  templateUrl: './hamburger.component.html',
  styleUrls: ['./hamburger.component.scss'],
})
export class HamburgerComponent implements OnInit {
  public toggle = false;
  constructor() {}

  ngOnInit() {}

  toggleAction(): void {
    this.toggle = !this.toggle;
  }
}
