import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class NavbarService {
  visible: boolean;
  user: User[];
  constructor(private authservice: AuthService) { this.visible = false; }
  hide() { this.visible = false; }
  show() {
     this.visible = true;
     this.authservice.user().subscribe(user => {
      this.user = user;
    })
     }
}
