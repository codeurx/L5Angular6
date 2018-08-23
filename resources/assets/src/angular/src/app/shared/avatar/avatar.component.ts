import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {
  user: User[];
  constructor(private authservice: AuthService, private router: Router) { }
  ngOnInit() {
    this.authservice.user().subscribe(user => {
      this.user = user;
    })
  }
  Upper(str) {
    if(str){
      for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash));
      var color = Math.floor(Math.abs((Math.sin(hash) * 10000) % 1 * 16777216)).toString(16);
      return {word:str.charAt(0).toUpperCase(),color:'#' + Array(6 - color.length + 1).join('0') + color};
    }else{
      return {word:'',color:'transparent'};
    }
  }
}
