import { DepartementsComponent } from './components/departements/departements.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule} from '@angular/router';
const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent, canActivate:[AuthGuard] },
    { path: 'authentification', component: LoginComponent},
    { path: 'profil', component: ProfileComponent, canActivate:[AuthGuard]},
    { path: 'gestiondepartements', component: DepartementsComponent, canActivate:[AuthGuard]}
];

export const routing = RouterModule.forRoot(APP_ROUTES)