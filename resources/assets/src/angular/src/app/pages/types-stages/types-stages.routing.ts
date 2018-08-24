import { Routes, RouterModule } from '@angular/router';
import { TypesStagesComponent } from './types-stages.component';

const childRoutes: Routes = [
    {
        path: '',
        component: TypesStagesComponent
    }
];

export const routing = RouterModule.forChild(childRoutes);