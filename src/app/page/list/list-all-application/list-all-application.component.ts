import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { Router } from '@angular/router';

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
  selector: 'app-list-all-application',
  templateUrl: './list-all-application.component.html',
  styleUrls: ['./list-all-application.component.css']
})
export class ListAllApplicationComponent implements OnInit {

  constructor(private router: Router) {}

  dataListApplication: Application[] = [];

  ngOnInit(): void {
    this.fetchDataApplication()
  }

  // APPLICATION
  fetchDataApplication(): void {
    axios.get('http://192.168.110.105:8080/application/all')
    .then((response) => {
      this.dataListApplication = response.data;
    })
    .catch((error) => {
      if(error.response.status === 500) {
        console.log(error.response.data.message)
      }
    })
  }
  
}
