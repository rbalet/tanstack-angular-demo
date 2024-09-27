import { Routes } from '@angular/router'
import { SessionGuard } from './core/guards/session.guard'

export const routes: Routes = [
  {
    path: '',
    canActivateChild: [SessionGuard],
    children: [
      {
        path: 'home',
        loadComponent: () => import('@pages/home/home.page').then((m) => m.HomePage),
      },
      {
        path: 'auth',
        loadComponent: () => import('@pages/auth/auth.page').then((m) => m.AuthPage),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
    ],
  },
]
