/* --- Angular Imports --- */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RtroDashboardComponent } from './rtro-dashboard/rtro-dashboard.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AlljobsListComponent } from './alljobs-list/alljobs-list.component';
import { MobileViewJobListComponent } from './mobile-view-job-list/mobile-view-job-list.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { CareerGuidanceComponent } from './career-guidance/career-guidance.component';

const routes: Routes = [

  {
    path: '',
    component: RtroDashboardComponent
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'signup',
    component: SignupComponent
  },

  {
    path: 'alljob-list',
    component: AlljobsListComponent
  },

  {
    path: 'mobile-view-job-list/:id',
    component: MobileViewJobListComponent
  },
  
  {
    path: 'admin-login',
    component: AdminLoginComponent
  },

  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent
  },

  {
    path: 'career-guidance',
    component: CareerGuidanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
