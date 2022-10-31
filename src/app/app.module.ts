import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatBadgeModule} from '@angular/material/badge';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';


import {MatInputModule} from '@angular/material/input'
import { MatSelectModule } from '@angular/material/select';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './pages/login/login.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { HomeLayoutComponent } from './layout/login-layout/home-layout/home-layout.component';
import { HomeComponent } from './pages/login/home/home.component';
import { HealthcareComponent } from './healthcare/healthcare.component';
import { AnalysisComponent } from './analysis/analysis.component';
import { PostofficeComponent } from './layout/postoffice-layout/postoffice/postoffice.component';
import { PhomeComponent } from './layout/postoffice-layout/phome/phome.component';
import { PanalysisComponent } from './layout/postoffice-layout/panalysis/panalysis.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    LoginLayoutComponent,
    HomeLayoutComponent,
    HomeComponent,
    HealthcareComponent,
    AnalysisComponent,
    PostofficeComponent,
    PhomeComponent,
    PanalysisComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,

    MatSidenavModule, //For sidenav bar
    MatGridListModule, //For grid layout
    MatMenuModule,  //For menus
    MatButtonModule, 
    MatCardModule, //Nice styles around elements
    MatIconModule, //For icons
    MatExpansionModule, //expansion filters on left side bar
    MatListModule, //For left side bar
    MatToolbarModule, //Header
    MatTableModule, //Table on cart page
    MatBadgeModule, //Adding badge inside cart icon to display how many items in cart
    MatSnackBarModule, //Displaying info to user eg adding new product or removing product notify user
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
