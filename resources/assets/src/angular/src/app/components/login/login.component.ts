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
  constructor(private rendrer: Renderer2, private router: Router,public authService: AuthService) {
      this.rendrer.addClass(document.body, 'text-center');
      this.rendrer.addClass(document.body, 'login');
  }
  ngOnInit() {
      if(this.authService.checkAuth())
        this.router.navigate(['']);
  }
  SubmitForm(f: NgForm){
      var authS = this.authService;
      var router = this.router;
      $('.error').slideUp();
      $('.errors').slideUp();
      var frm = $('#loginform');
      frm.validate({
          ignore: [],
          rules: {
              email: {
                  required: true,
                  email:true
              },
              password: {
                  required: true,
                  minlength: 6
              }
          },
          messages: {
              email: {required: "Please enter your email",email:"Invalid email adress"},
              password: {required: "Please enter your password",minlength:"At least 6 characters for the password"}
          },
          errorClass: 'not-valid',
          errorPlacement: function (error, element) {
              return false;
          },
          errorContainer: $('.errors'),
          errorLabelContainer: $('.errors ul'),
          wrapper: 'li',
          submitHandler: submitForm
      });
      function submitForm() {
          authS.login(f.value.email, f.value.password).subscribe(
              response => '',
                  error => {
                  $('.error').slideDown();
                  setTimeout(function(){
                      $('.error').slideUp();
                      },2000)
                  }, () => router.navigate([''])
              )
      }
  }
}