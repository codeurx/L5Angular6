import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './../services/auth.guard';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';
export const childRoutes: Routes = [
    { path: 'auth',component: AuthComponent},
    {
        path: 'pages',
        component: PagesComponent,
        children: [
            { path: '', redirectTo: 'index', pathMatch: 'full'},
            { path: 'index', loadChildren: './index/index.module#IndexModule', canActivate:[AuthGuard] },
            { path: 'gestion-departements', loadChildren: './departements/departements.module#DepartementsModule', canActivate:[AuthGuard] },
            { path: 'types-stages', loadChildren: './types-stages/types-stages.module#TypesStagesModule', canActivate: [AuthGuard] }
        ]
    }
];
export const routing = RouterModule.forChild(childRoutes);