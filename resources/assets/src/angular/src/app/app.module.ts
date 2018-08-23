import { AuthGuard } from './services/auth.guard';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { routing } from "./app.routing";
import { FormsModule } from "@angular/forms";
import { AuthService } from "./services/auth.service";
import { HttpModule } from "@angular/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import * as jquery from 'jquery';
import { DepartementsComponent } from './components/departements/departements.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,
    DepartementsComponent    
  ],
  imports: [
    BrowserModule,BrowserAnimationsModule,HttpModule,NgxPaginationModule,routing,FormsModule,SharedModule,NgbModule.forRoot()
  ],
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
