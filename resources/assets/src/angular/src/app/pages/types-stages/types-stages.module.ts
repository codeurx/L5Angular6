import { NgxPaginationModule } from 'ngx-pagination';
import { TypesStagesComponent } from './types-stages.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './types-stages.routing';
import { SharedModule } from '../../shared/shared.module';
import { TitleLinkModule } from '../../shared/titlelink/titlelink.module';
import { TypestageService } from '../../services/typestage.service';
import { SweetAlertService } from 'angular-sweetalert-service';
import {FormsModule} from "@angular/forms";
@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      routing,
      TitleLinkModule,
      FormsModule, NgxPaginationModule
    ],
    declarations: [
      TypesStagesComponent
    ],
    providers:[
      TypestageService,
      SweetAlertService
    ]
})
export class TypesStagesModule { }
