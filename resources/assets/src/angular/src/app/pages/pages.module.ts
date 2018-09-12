import { NgxPaginationModule } from 'ngx-pagination';
import { AuthComponent } from './auth/auth.component';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule } from '@angular/common';
import { routing } from './pages.routing';
import { SharedModule } from '../shared/shared.module';
import { PagesComponent } from './pages.component';
@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        routing,
        FormsModule,
        NgxPaginationModule      
    ],
    declarations: [
        PagesComponent,
        AuthComponent
    ]
})
export class PagesModule { }