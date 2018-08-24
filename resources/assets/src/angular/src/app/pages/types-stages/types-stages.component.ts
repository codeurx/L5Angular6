import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { TypestageService } from '../../services/typestage.service';
import { TypeStage } from '../../models/typestage';

@Component({
  selector: 'app-types-stages',
  templateUrl: './types-stages.component.html',
  styleUrls: ['./types-stages.component.css']
})
export class TypesStagesComponent implements OnInit {
  user: User[];
  typestage:TypeStage[];
  public Title = 'Types des Stages';
  constructor(private authservice: AuthService, private router: Router, private typesStages: TypestageService) { }
  ngOnInit() {
    this.authservice.user().subscribe(user => {
      this.user = user;
      if ((user.role != 'superadmin') && (user.role != 'admin')) {
        this.router.navigate(['pages/index']);
      }
      this.typesStages.getTypesStages()
        .subscribe(
        data => this.typestage = data,
          error => console.log(error)
        );
    })
  }
}
