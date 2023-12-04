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
    AddUserComponent
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
