import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
// import { HealthcareComponent } from './healthcare/healthcare.component';
// import { AnalysisComponent } from './analysis/analysis.component';s
import { PhomeComponent } from './layout/postoffice-layout/phome/phome.component';
import { PostofficeComponent } from './layout/postoffice-layout/postoffice/postoffice.component';
import { PanalysisComponent } from './layout/postoffice-layout/panalysis/panalysis.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'home2',
    component: PhomeComponent,
  },
  {
    path: '',
    component: LoginComponent,

  },
  {
    path: 'postoffice',
    component: PostofficeComponent,
  },
  {
    path: 'analysis2',
    component: PanalysisComponent,
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
