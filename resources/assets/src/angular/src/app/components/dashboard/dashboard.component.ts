import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit,Renderer2 } from '@angular/core';
import { NavbarService } from '../../services/navbar.service';
import { SidebarService } from '../../services/sidebar.service';
import { FooterService } from '../../services/footer.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(public nav: NavbarService, public side: SidebarService, public footer: FooterService, private renderer: Renderer2) {
    this.renderer.addClass(document.body, '2-columns');
    this.renderer.setAttribute(document.body, 'data-col', '2-columns');
   }
  ngOnInit() {
    this.nav.show();
    this.side.show();
    this.footer.show();
  }
}
