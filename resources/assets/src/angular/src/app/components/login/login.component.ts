import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthService} from "../../services/auth.service";
import { NavbarService } from '../../services/navbar.service';
import { SidebarService } from '../../services/sidebar.service';
import { FooterService } from '../../services/footer.service';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    constructor(public nav: NavbarService, public side: SidebarService, public footer: FooterService, private router: Router, public authService: AuthService) {}
  ngOnInit() {
      this.nav.hide();
      this.side.hide();
      this.footer.hide();
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