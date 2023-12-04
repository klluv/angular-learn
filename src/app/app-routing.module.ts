import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './page/login/login.component';
import { ListComponent } from './page/list/list.component';
import { EditAppRoleComponent } from './page/edit/edit-app-role/edit-app-role.component';
import { AddUserComponent } from './page/add-user/add-user.component';
import { ListAllApplicationComponent } from './page/list/list-all-application/list-all-application.component';
import { ListAllDivisionComponent } from './page/list/list-all-division/list-all-division.component';
import { ListAllRoleComponent } from './page/list/list-all-role/list-all-role.component';
import { ListApplicationRoleComponent } from './page/list/list-application-role/list-application-role.component';
import { ListUserAppRoleComponent } from './page/list/list-user-app-role/list-user-app-role.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login', 
    pathMatch: 'full',
  },
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {
        path: 'main',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'list',
        component: ListComponent
      },
      {
        path: 'edit-app-role/:appUuid',
        component: EditAppRoleComponent
      },
      {
        path: 'add-user',
        component: AddUserComponent
      },
      {
        path: 'list-all-application',
        component: ListAllApplicationComponent
      },
      {
        path: 'list-all-division',
        component: ListAllDivisionComponent
      },
      {
        path: 'list-all-role',
        component: ListAllRoleComponent
      },
      {
        path: 'list-application-role',
        component: ListApplicationRoleComponent
      },
      {
        path: 'list-user-app-role',
        component: ListUserAppRoleComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
