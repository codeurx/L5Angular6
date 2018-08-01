import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private authservice:AuthService, private router:Router) { }
  ngOnInit() {
    $(document).ready(function(){
      $(document).initapp();
      $(document).initnavigation();
      $(document).initappcanvas();
      $(document).initappcard();
      $(document).initappform();
      $(document).initsearch();
      $(document).initappvendor();
      //$(document).initdemo();
      $(document).initdashboard();
    });
  }
}