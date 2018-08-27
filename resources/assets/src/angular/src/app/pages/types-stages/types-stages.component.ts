import { ViewEncapsulation, Input } from '@angular/core';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'ngbd-modal-content'
})

export class NgbdModalContent {
  @Input() title;
  constructor(public activeModal: NgbActiveModal) { }
}

import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { TypestageService } from '../../services/typestage.service';
import { TypeStage } from '../../models/typestage';
import { SweetAlertService } from 'angular-sweetalert-service/js';

@Component({
  selector: 'app-types-stages',
  templateUrl: './types-stages.component.html',
  styleUrls: ['./types-stages.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TypesStagesComponent implements OnInit {
  closeResult: string;
  user: User[];
  typestage: TypeStage[];
  public Title = 'Types des Stages';
  constructor(private authservice: AuthService, private router: Router, private typesStages: TypestageService, private modalService: NgbModal, private alertService: SweetAlertService) { }
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
  btnAdd(content) {
    this.modalService.open(content,{ centered: true }).result.then((result) => {
      console.log(result)
    }, (reason) => {
      console.log(reason)
    });
  }
  alert(){
    this.alertService.swal('title','hello','error');
  }
}
