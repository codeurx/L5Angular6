import { Routes, RouterModule} from '@angular/router';
import { PagesComponent } from './pages/pages.component';
const APP_ROUTES: Routes = [
    { path: '', redirectTo: 'pages/index', pathMatch: 'full' },
    { path: '**', redirectTo: 'pages/index'}
];
export const routing = RouterModule.forRoot(APP_ROUTES)