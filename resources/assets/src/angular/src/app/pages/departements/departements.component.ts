import { Departement } from './../../models/departement';
import { PaginationInstance } from 'ngx-pagination';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import {DepartmentsService} from "../../services/departments.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {SweetAlertService} from "angular-sweetalert-service";

@Component({
  selector: 'app-departements',
  templateUrl: './departements.component.html',
  styleUrls: ['./departements.component.css']
})
export class DepartementsComponent implements OnInit {
  name: string = '';
  id: number = 0;
  user: User[];
  searchname: string = "";
  departments: Departement[];
  public Title = 'Départements';
  newTsForm: FormGroup;
  animationState = 'out';
  modalNewTypeStage: any;
  public config: PaginationInstance = {
    id: 'typesStages',
    itemsPerPage: 5,
    currentPage: 1,
    totalItems: 0
  };
  public labels: any = {
    previousLabel: 'Préc',
    nextLabel: 'Suiv'
  };
  constructor(private authservice: AuthService, private router: Router, private Department:DepartmentsService, private modalService: NgbModal, private alertService: SweetAlertService, private fb: FormBuilder) {
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
      this.Title = 'Gestion Départements';
      this.Department.list(this.searchname, this.config.currentPage).subscribe((data) => { this.departments = data.data; this.config.totalItems = data.total; }, error => console.log(error));
    })
  }
  new(content) {
    this.name= ''
    this.modalNewTypeStage =  this.modalService.open(content,{ centered: true });
    this.modalNewTypeStage.result.then((result) => {
      console.log(result)
    }, (reason) => {
      console.log(reason)
    });
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
  delete(id){
    this.alertService.confirm({
      title: 'Voulez vous vraiment supprimer ce département?',
      confirmButtonText:'Confirmer',
      cancelButtonText:'Annuler',
      confirmButtonClass:'btn btn-primary',
      cancelButtonClass:'btn'
    })
      .then(() => {
        this.Department.delete(id).subscribe(
          (response)=>{
            if(response.msg=='ok'){
              this.Department.list(this.searchname, this.config.currentPage)
                .subscribe(
                (data) => { this.departments = data.data; this.config.totalItems = data.total;},
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
      this.Department.save(newTsForm.controls.name.value).subscribe(
        (response)=>{
          if(response.msg=='ok'){
            this.Department.list(this.searchname, this.config.currentPage)
              .subscribe(
              (data) => { this.departments = data.data; this.config.totalItems = data.total; },
                error => console.log(error)
              );
            newTsForm.controls.name.value = '';
            this.modalNewTypeStage.close();
          }
        }
      );
    }
  }
  update(newTsForm){
    if(newTsForm.valid){
      this.Department.update(newTsForm.controls.name.value,this.id).subscribe(
        (response)=>{
          if(response.msg=='ok'){
            console.log(response.msg)
            this.Department.list(this.searchname, this.config.currentPage)
              .subscribe(
              (data) => { this.departments = data.data; this.config.totalItems = data.total; },
                error => console.log(error)
              );
            newTsForm.controls.name.value = '';
            this.modalNewTypeStage.close();
          }
        }
      );
    }
  }
  search(evt) {
    this.Department.list(this.searchname, this.config.currentPage)
      .subscribe((data) => {
        this.departments = data.data;
        this.config.totalItems = data.total;
      },
        error => console.log(error)
      );
  }
  onPageChange(number: number) {
    this.config.currentPage = number;
    this.Department.list(this.searchname, this.config.currentPage).subscribe((data) => {
      this.departments = data.data;
      this.config.totalItems = data.total;
    }, error => console.log(error));
  }
}
