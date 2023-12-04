import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

interface Role {
  role_uuid: string;
  role_order: number;
  role_code: string;
  role_title: string;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
  deleted_by: string;
  deleted_at: string;
}

interface AppRole {
  user_uuid: string;
  user_name: string;
  role_title: string;
  application_title: string;
  division_title: string;
}

interface Division {
  division_uuid: string;
  division_order: number;
  division_code: string;
  division_title: string;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
  deleted_by: string;
  deleted_at: string;
}

interface Application {
  application_uuid: string;
  application_order: number;
  application_code: string;
  application_title: string;
  application_description: string;
  created_by: string;
  created_at: string;
  updated_by: string;
  updated_at: string;
  deleted_by: string;
  deleted_at: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private router: Router) {}
  
  dataListRole: Role[] = [];
  dataListUserAppRole: AppRole[] = [];
  dataListDivision: Division[] = [];
  dataListApplication: Application[] = [];

  ngOnInit(): void {
    this.fetchDataRole()
    this.fetchDataUserAppRole()
    this.fetchDataDivision()
    this.fetchDataApplication()
  }

  // ROLE
  fetchDataRole(): void {
    axios.get('http://localhost:8080/role/all')
    .then((response) => {
      this.dataListRole = response.data;
    })
    .catch((error) => {
      if(error.response.status === 500) {
        console.log(error.response.data.message)
      }
    })
  }

  // DIVISION
  fetchDataDivision(): void {
    axios.get('http://localhost:8080/division/all')
    .then((response) => {
      this.dataListDivision = response.data;
    })
    .catch((error) => {
      if(error.response.status === 500) {
        console.log(error.response.data.message)
      }
    })
  }

  // APPLICATION
  fetchDataApplication(): void {
    axios.get('http://localhost:8080/application/all')
    .then((response) => {
      this.dataListApplication = response.data;
    })
    .catch((error) => {
      if(error.response.status === 500) {
        console.log(error.response.data.message)
      }
    })
  }

   // APP ROLE
   fetchDataUserAppRole(): void {
    axios.get('http://localhost:8080/user/application/role')
    .then((response) => {
      this.dataListUserAppRole = response.data;
    })
    .catch((error) => {
      if(error.response.status === 500) {
        console.log(error.response.data.message)
      }
    })
  }

  onEditAppRole(appUuid: string) {
    this.router.navigate(['edit-app-role', appUuid]);
  }
}
