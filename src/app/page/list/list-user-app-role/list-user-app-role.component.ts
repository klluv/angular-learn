import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

interface AppRole {
  user_uuid: string;
  user_name: string;
  role_title: string;
  application_title: string;
  division_title: string;
}

@Component({
  selector: 'app-list-user-app-role',
  templateUrl: './list-user-app-role.component.html',
  styleUrls: ['./list-user-app-role.component.css']
})
export class ListUserAppRoleComponent implements OnInit{ 
  
  constructor(private router: Router){}

  dataListUserAppRole: AppRole[] = [];

  ngOnInit(): void {
    this.fetchDataUserAppRole()
  }

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

}
