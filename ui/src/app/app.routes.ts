import { Routes } from '@angular/router';

import { LandingComponent } from './features/client/landing/landing.component';
import { LoginComponent } from './core/auth/pages/login/login.component';
import { RegisterComponent } from './core/auth/pages/register/register.component';
import { DashboardComponent } from './features/client/dashboard/dashboard.component';
import { RestaurantComponent } from './features/client/restaurant/restaurant.component';
import { ProfileComponent } from './features/client/profile/profile.component';

export const routes: Routes = [
  { path: '', component: LandingComponent, pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'restaurant', component: RestaurantComponent },
  { path: 'restaurant/:slug', component: RestaurantComponent },
  { path: 'profile', component: ProfileComponent }
];
