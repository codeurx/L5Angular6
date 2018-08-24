import { DepartementsComponent } from './departements.component';
import { Routes, RouterModule } from '@angular/router';
const childRoutes: Routes = [
    {
        path: '',
        component: DepartementsComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);