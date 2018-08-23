import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from './../../models/user';
import { NavbarService } from '../../services/navbar.service';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {
    user: User[];
    constructor(public nav: NavbarService,private authservice: AuthService, private router: Router) { }

    ngOnInit() {
    }
    logout() {
        this.authservice.logout().subscribe(
            resp => {
                this.router.navigate(['authentification']);
            }
        );
    }
}
