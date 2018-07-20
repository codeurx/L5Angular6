import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private rendrer: Renderer2) {
      this.rendrer.addClass(document.body, 'text-center');
      this.rendrer.addClass(document.body, 'login');
  }

  ngOnInit() {
  }

}
