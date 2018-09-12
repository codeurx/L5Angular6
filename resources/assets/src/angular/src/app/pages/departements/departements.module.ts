import { NgxPaginationModule } from 'ngx-pagination';
import { DepartementsComponent } from './departements.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './departements.routing';
import { SharedModule } from '../../shared/shared.module';
import { TitleLinkModule } from '../../shared/titlelink/titlelink.module';
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing, TitleLinkModule, FormsModule, NgxPaginationModule
    ],
    declarations: [
        DepartementsComponent
    ]
})
export class DepartementsModule { }
