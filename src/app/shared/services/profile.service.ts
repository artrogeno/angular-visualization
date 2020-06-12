import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { environment } from '@environments/environment';
import { ProfileI } from '@shared/models';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  protected profileSource = new BehaviorSubject(environment.profile);
  public currentProfile = this.profileSource.asObservable();
  public profile: ProfileI = environment.profile;

  constructor() {}

  changeProfile(profile: ProfileI): void {
    this.profile = profile;
    this.profileSource.next(this.profile);
  }

  toggle(): void {
    const profile = { ...this.profile, toggle: !this.profile.toggle };
    this.changeProfile(profile);
  }
}
