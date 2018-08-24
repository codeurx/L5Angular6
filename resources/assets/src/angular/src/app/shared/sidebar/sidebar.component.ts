import { RouteInfo } from './sidebar.metadata';
import { User } from './../../models/user';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
declare var $: any;
@Component({
    // moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
    menuItems: any[];
    routeinfo: RouteInfo[];
    constructor(private router: Router, private route: ActivatedRoute, private authservice : AuthService) {}
    ngOnInit() {
        $.getScript('./assets/app/js/core/app-menu.js');
        $.getScript('./assets/app/js/core/app.js');
        this.authservice.user().subscribe(user => {
            this.routeinfo = [
                {
                    path: '/pages/index', title: 'Accueil', icon: 'ft-home', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: []
                },
            ];
            if((user.role == 'superadmin')||(user.role=='admin')){
                this.routeinfo.push({
                    path: '/pages/gestion-departements', title: 'Gestion Départements', icon: 'fa fa-building', class: 'nav-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: []
                },
                    {
                        path: 'javascript:;', title: 'Configurations', icon: 'ft-settings', class: 'nav-item has-sub', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false,
                        submenu: [
                            { path: '/pages/types-stages', title: 'Types des stages', icon: 'fa fa-files-o', class: 'menu-item', badge: '', badgeClass: '', isExternalLink: false, isNavHeader: false, submenu: [] }
                        ]
                    })
            }
            this.menuItems = this.routeinfo.filter(menuItem => menuItem);
        })
    }
}
