import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { LoginComponent } from './page/login/login.component';
import { ListComponent } from './page/list/list.component';
import { EditAppRoleComponent } from './page/edit/edit-app-role/edit-app-role.component';
import { AddUserComponent } from './page/add-user/add-user.component';

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
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
