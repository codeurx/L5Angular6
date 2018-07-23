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
  constructor(private rendrer: Renderer2,public authService: AuthService, private router: Router){
      this.rendrer.removeClass(document.body, 'text-center');
      this.rendrer.removeClass(document.body, 'login');
  }
  ngOnInit(){
      this.authService.checkAuth();
  }
  logout() {
      this.authService.logout().subscribe(
          resp => function(){
              this.router.navigate(['']);
          },
          err => console.log(err),
          () => console.log("Unsubscribed")
      );
  }
}
