import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './page/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { HomeComponent } from './page/home/home.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { ListComponent } from './page/list/list.component';
import { EditComponent } from './page/edit/edit.component';
import { EditAppRoleComponent } from './page/edit/edit-app-role/edit-app-role.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './page/add-user/add-user.component';
import { ListUserAppRoleComponent } from './page/list/list-user-app-role/list-user-app-role.component';
import { ListAllDivisionComponent } from './page/list/list-all-division/list-all-division.component';
import { ListAllApplicationComponent } from './page/list/list-all-application/list-all-application.component';
import { ListAllRoleComponent } from './page/list/list-all-role/list-all-role.component';
import { ListApplicationRoleComponent } from './page/list/list-application-role/list-application-role.component';
import { EditDivisionComponent } from './page/edit/edit-division/edit-division.component';
import { EditRoleComponent } from './page/edit/edit-role/edit-role.component';
import { EditAppComponent } from './page/edit/edit-app/edit-app.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    MainLayoutComponent,
    HomeComponent,
    SidebarComponent,
    ListComponent,
    EditComponent,
    EditAppRoleComponent,
    AddUserComponent,
    ListUserAppRoleComponent,
    ListAllDivisionComponent,
    ListAllApplicationComponent,
    ListAllRoleComponent,
    ListApplicationRoleComponent,
    EditDivisionComponent,
    EditRoleComponent,
    EditAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
