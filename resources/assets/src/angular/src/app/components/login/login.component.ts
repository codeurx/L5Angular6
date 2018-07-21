import {Component, OnInit, Renderer2} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
declare var jquery:any;
declare var $ :any;
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private rendrer: Renderer2, private router: Router,private authService: AuthService) {
      this.rendrer.addClass(document.body, 'text-center');
      this.rendrer.addClass(document.body, 'login');
  }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
        this.authService.login(f.value.email, f.value.password)
            .subscribe(
                response => console.log(response),
                error => {
                    $('.error').slideDown();
                    setTimeout(function(){
                        $('.error').slideUp();
                    },2000)
                },
                () => this.router.navigate([''])
            )
    }
}
