import { Router } from '@angular/router';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user : User[];
  constructor(private authservice: AuthService, private router:Router) { }

  ngOnInit() {
    this.authservice.user().subscribe(user=>{
      this.user = user;
    })
  }
  logout() {
    this.authservice.logout().subscribe(
      resp => {
        this.router.navigate(['login']);
      }
    );
  }

}
