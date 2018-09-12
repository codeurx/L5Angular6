import { ViewEncapsulation, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { TypestageService } from '../../services/typestage.service';
import { TypeStage } from '../../models/typestage';
import { SweetAlertService } from 'angular-sweetalert-service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { PaginationInstance } from 'ngx-pagination';

@Component({
  selector: 'app-types-stages',
  templateUrl: './types-stages.component.html',
  styleUrls: ['./types-stages.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class TypesStagesComponent implements OnInit {
  name:string='';
  id: number=0;
  user: User[];
  searchname : string ="";
  typestage: TypeStage[];
  public Title = 'Types des Stages';
  newTsForm: FormGroup;
  animationState = 'out';
  modalNewTypeStage :  any;
  public config: PaginationInstance = {
    id:'typesStages',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems:0
  };
  public labels: any = {
    previousLabel: 'Préc',
    nextLabel: 'Suiv'
  };
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
      this.typesStages.list(this.searchname, this.config.currentPage).subscribe((data) => {
        this.typestage = data.data;
        this.config.totalItems = data.total;
      }, error => console.log(error));
    })
  }
  new(content) {
    this.name= '';
    this.modalNewTypeStage =  this.modalService.open(content,{ centered: true });
    this.modalNewTypeStage.result.then((result) => {
      console.log(result)
    }, (reason) => {
      console.log(reason)
    });
  }
  delete(id){
    this.alertService.confirm({
      title: 'Voulez vous vraiment supprimer ce type de stage?',
      confirmButtonText:'Confirmer',
      cancelButtonText:'Annuler',
      confirmButtonClass:'btn btn-primary',
      cancelButtonClass:'btn'
    })
      .then(() => {
        this.typesStages.delete(id).subscribe(
          (response)=>{
            if(response.msg=='ok'){
              this.typesStages.list(this.searchname, this.config.currentPage)
                .subscribe((data) => {
                  this.typestage = data.data;
                  this.config.totalItems = data.total;
                },
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
  save(newTsForm){
    if(newTsForm.valid){
      this.typesStages.save(newTsForm.controls.name.value).subscribe(
        (response)=>{
          if(response.msg=='ok'){
            this.typesStages.list(this.searchname, this.config.currentPage)
              .subscribe((data) => {
                this.typestage = data.data;
                this.config.totalItems = data.total;
              },
                error => console.log(error)
              );
            newTsForm.controls.name.value = '';
            this.modalNewTypeStage.close();
          }
        }
      );
  }
}
  edit(content,obj){
    this.id = obj.id;
    this.name = obj.name;
    this.modalNewTypeStage =  this.modalService.open(content,{ centered: true });
    this.modalNewTypeStage.result.then((result) => {
      console.log(result)
    }, (reason) => {
      console.log(reason)
    });
  }
  update(newTsForm){
    if(newTsForm.valid){
      this.typesStages.update(newTsForm.controls.name.value,this.id).subscribe(
        (response)=>{
          if(response.msg=='ok'){
            this.typesStages.list(this.searchname, this.config.currentPage)
              .subscribe((data) => {
                this.typestage = data.data;
                this.config.totalItems = data.total;
              },
                error => console.log(error)
              );
            newTsForm.controls.name.value = '';
            this.modalNewTypeStage.close();
          }
        }
      );
    }
  }
  search(evt){
    this.typesStages.list(this.searchname, this.config.currentPage)
      .subscribe((data) => {
        this.typestage = data.data;
        this.config.totalItems = data.total;
      },
        error => console.log(error)
      );
  }
  onPageChange(number: number){
    this.config.currentPage = number;
    this.typesStages.list(this.searchname, this.config.currentPage).subscribe((data) => {
      this.typestage = data.data;
      this.config.totalItems = data.total;
    }, error => console.log(error));
  }
}
