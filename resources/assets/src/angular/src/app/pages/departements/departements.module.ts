import { DepartementsComponent } from './departements.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './departements.routing';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing
    ],
    declarations: [
        DepartementsComponent
    ]
})
export class DepartementsModule { }