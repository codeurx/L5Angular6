import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  constructor(private renderer:Renderer2, private authService:AuthService, private router:Router) { }
  ngOnInit() {
    if(!this.authService.checkAuth())
      this.router.navigate(['auth']);
    this.renderer.addClass(document.body, '2-columns');
    this.renderer.setAttribute(document.body, 'data-col', '2-columns');
  }
}
