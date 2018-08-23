import {Component, OnInit, Renderer2} from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  route: string;

  constructor(private rendrer: Renderer2, private router:Router){
    this.route = router.url; 
    //   this.rendrer.removeClass(document.body, 'text-center');
    //   this.rendrer.removeClass(document.body, 'login');
  }
  ngOnInit(){
  }
}
