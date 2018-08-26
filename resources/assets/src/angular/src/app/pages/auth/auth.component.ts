import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
 loginForm: FormGroup;
  constructor(private router: Router, public authService: AuthService, private fb: FormBuilder ){
    this.loginForm = fb.group({
            'email': [null, Validators.minLength(3)],
            'password': [null, Validators.minLength(6)],
        });
   }
  ngOnInit() {
    if(this.authService.checkAuth())
      this.router.navigate(['pages/index']);
}
  SubmitForm(){
    console.log(this.loginForm);
  /* this.authService.login(f.value.email, f.value.password).subscribe(
      response => '',
          error => {
          }, () => this.router.navigate(['pages/index'])
      ) */
}
}
