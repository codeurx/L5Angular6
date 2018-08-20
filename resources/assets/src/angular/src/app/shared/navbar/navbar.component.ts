import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    user: User[];
    constructor(private authservice: AuthService, private router: Router) { }

    ngOnInit() {
        this.authservice.user().subscribe(user => {
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
