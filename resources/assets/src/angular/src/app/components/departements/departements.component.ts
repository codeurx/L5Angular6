import { User } from './../../models/user';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
  user : User[];
  constructor(private authservice: AuthService,private router:Router,public nav:NavbarService, public side:SidebarService) { }
  ngOnInit() {
    this.nav.show();
    this.side.show();
    this.authservice.user().subscribe(user => {
      this.user = user;
      if ((user.role!='superadmin')&&(user.role!='admin')) {
        this.router.navigate(['']);
      }
  })
  }
}
