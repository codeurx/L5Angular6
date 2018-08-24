import { CommonModule } from '@angular/common';
import { TitlelinkComponent } from './titlelink.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
@NgModule({
    exports: [
        TitlelinkComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    declarations: [
        TitlelinkComponent
    ]
})
export class TitleLinkModule { }