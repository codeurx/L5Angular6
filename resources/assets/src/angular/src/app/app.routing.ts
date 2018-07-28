import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './services/auth.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Routes, RouterModule} from '@angular/router';
const APP_ROUTES: Routes = [
    { path: '', component: DashboardComponent, canActivate:[AuthGuard] },
    { path: 'login', component: LoginComponent}
];

export const routing = RouterModule.forRoot(APP_ROUTES)