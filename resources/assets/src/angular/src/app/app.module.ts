import { AuthGuard } from './services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { routing } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { HttpModule } from "@angular/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import * as jquery from 'jquery';
import { PagesModule } from './pages/pages.module';
@NgModule({
  declarations: [
    AppComponent 
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpModule,NgxPaginationModule,routing,FormsModule,PagesModule,SharedModule,NgbModule.forRoot()
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
