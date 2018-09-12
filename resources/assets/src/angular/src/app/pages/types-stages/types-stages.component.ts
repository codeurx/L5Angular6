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
import { SweetAlertService } from 'angular-sweetalert-service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-types-stages',
  templateUrl: './types-stages.component.html',
  styleUrls: ['./types-stages.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TypesStagesComponent implements OnInit {
  name:string='';
  user: User[];
  typestage: TypeStage[];
  public Title = 'Types des Stages';
  newTsForm: FormGroup;
  animationState = 'out';
  modalNewTypeStage :  any;
  constructor(private authservice: AuthService, private router: Router, private typesStages: TypestageService, private modalService: NgbModal, private alertService: SweetAlertService, private fb: FormBuilder) {
    this.newTsForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
    });
   }
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
    this.name= ''
    this.modalNewTypeStage =  this.modalService.open(content,{ centered: true });
    this.modalNewTypeStage.result.then((result) => {
      console.log(result)
    }, (reason) => {
      console.log(reason)
    });
  }
  delete(id){
    this.alertService.confirm({
      title: 'Voulez vous vraiment supprimer ce type de stage?'
    })
      .then(() => {
        this.typesStages.deleteTypeStage(id).subscribe(
          (response)=>{
            if(response.msg=='ok'){
              this.typesStages.getTypesStages()
                .subscribe(
                  data => this.typestage = data,
                  error => console.log(error)
                );
              this.alertService.success({
                title: 'Supprimé avec succés'
              });
            }
          }
         );
      })
      .catch(() => console.log('canceled'));
  }
  savetypestage(newTsForm){
    if(newTsForm.valid){
      this.typesStages.savenew(newTsForm.controls.name.value).subscribe(
        (response)=>{
          if(response.msg=='ok'){
            this.typesStages.getTypesStages()
              .subscribe(
                data => this.typestage = data,
                error => console.log(error)
              );
            newTsForm.controls.name.value = '';
            this.modalNewTypeStage.close();
          }
        }
      );
  }
}
}
