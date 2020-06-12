import { Component, OnInit } from '@angular/core';

import { ProfileI } from '@shared/models';
import { ProfileService } from '@shared/services/profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public toggle: boolean;

  constructor(private profileService: ProfileService) {
    this.profileService.currentProfile.subscribe(({ toggle }: ProfileI) => {
      this.toggle = toggle;
    });
  }

  ngOnInit() {}

  toggleProfile(): void {
    this.profileService.toggle();
  }
}
