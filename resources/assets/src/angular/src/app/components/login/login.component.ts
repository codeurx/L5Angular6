import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router,public authService: AuthService) {}
  ngOnInit() {
      if(this.authService.checkAuth())
        this.router.navigate(['']);
  }
  SubmitForm(f: NgForm){
    this.authService.login(f.value.email, f.value.password).subscribe(
        response => '',
            error => {
            
            }, () => this.router.navigate([''])
        )
  }
}