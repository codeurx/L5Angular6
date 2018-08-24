import { TitlelinkComponent } from './../../shared/titlelink/titlelink.component';
import { DepartementsComponent } from './departements.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './departements.routing';
import { SharedModule } from '../../shared/shared.module';
import { TitleLinkModule } from '../../shared/titlelink/titlelink.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,TitleLinkModule
    ],
    declarations: [
        DepartementsComponent
    ]
})
export class DepartementsModule { }