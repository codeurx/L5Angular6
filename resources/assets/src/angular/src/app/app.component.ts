import {Component, OnInit, Renderer2} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  constructor(private rendrer: Renderer2){
      this.rendrer.removeClass(document.body, 'text-center');
      this.rendrer.removeClass(document.body, 'login');
  }
  ngOnInit(){

  }
}
