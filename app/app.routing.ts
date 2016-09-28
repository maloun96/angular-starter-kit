import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent }  from './home/home.component';
import { ProjectComponent }    from './project/project.component';


const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'project', component: ProjectComponent },
];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);