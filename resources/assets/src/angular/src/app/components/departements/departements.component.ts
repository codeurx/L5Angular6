import { User } from './../../models/user';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
  user : User[];
  constructor(private authservice: AuthService,private router:Router) { }
  ngOnInit() {
    this.authservice.user().subscribe(user => {
      this.user = user;
      if ((user.role!='superadmin')&&(user.role!='admin')) {
        this.router.navigate(['']);
      }
  })
  }
}
