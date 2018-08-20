import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit,Renderer2 } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private renderer: Renderer2) {
    this.renderer.addClass(document.body, '2-columns');
    this.renderer.setAttribute(document.body, 'data-col', '2-columns');
   }
  ngOnInit() {

  }
}
