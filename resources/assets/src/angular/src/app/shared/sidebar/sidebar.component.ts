import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import { SidebarService } from '../../services/sidebar.service';
import { ROUTES } from './sidebar-routes.config';
declare var $: any;
@Component({
    // moduleId: module.id,
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    menuItems: any[];
    constructor(private router: Router,private route: ActivatedRoute,public side: SidebarService) {
        $.getScript('./assets/app/js/core/app-menu.js');
        $.getScript('./assets/app/js/core/app.js');
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
    ngOnInit() {
        
    }

}
