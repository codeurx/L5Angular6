import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { SlideInOutAnimation } from '../../shared/animations';
@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  animations: [SlideInOutAnimation]
})
export class AuthComponent implements OnInit {
  loginForm: FormGroup;
  animationState = 'out';
  constructor(private router: Router, public authService: AuthService, private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }
  ngOnInit() {
    if (this.authService.checkAuth())
      this.router.navigate(['pages/index']);
  }
  SubmitForm(loginForm) {
    this.authService.login(loginForm.controls.email.value, loginForm.controls.password.value).subscribe(
      response => '',
      error => {
        this.animationState = 'in';
        setTimeout(function () {
          this.animationState = 'out';
        }.bind(this), 1500);
      }, () => this.router.navigate(['pages/index'])
    )
  }
}
