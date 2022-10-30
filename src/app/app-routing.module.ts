import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { HomeComponent } from './pages/login/home/home.component';
import { HomeLayoutComponent } from './layout/login-layout/home-layout/home-layout.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeLayoutComponent,
   
  },
  {
    path: '',
    component: LoginLayoutComponent,

  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
