import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  constructor(private router: Router, public authService: AuthService) { }
  ngOnInit() {
    if(this.authService.checkAuth())
      this.router.navigate(['pages/index']);
}
SubmitForm(f: NgForm){
  this.authService.login(f.value.email, f.value.password).subscribe(
      response => '',
          error => {
          }, () => this.router.navigate(['pages/index'])
      )
}
}
