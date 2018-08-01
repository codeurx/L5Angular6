import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare var $ :any;
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(document).ready(function(){
      $(document).initapp();
      $(document).initnavigation();
      $(document).initappcanvas();
      $(document).initappcard();
      $(document).initappform();
      $(document).initsearch();
      $(document).initappvendor();
      $(document).initdemo();
      $(document).initdashboard();
    });
  }

}
