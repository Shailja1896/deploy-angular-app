import { Routes } from '@angular/router';
import { AuthguardService } from './services/authguard.service';
import { LoginAuthguardService } from './services/login-authguard.service';

export const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => import('./screens/home/home.module').then(m => m.HomeModule),
       canActivate: [AuthguardService]
    },
    {
        path: 'login',
        loadChildren: () => import('./screens/login/login.module').then(m => m.LoginModule),
        canActivate: [LoginAuthguardService]
    },
    {
        path: '**',
        redirectTo: '/home'
    }
];
