import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

interface SpecAppData {
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
  selector: 'app-edit-app',
  templateUrl: './edit-app.component.html',
  styleUrls: ['./edit-app.component.css']
})
export class EditAppComponent implements OnInit {

  appUuid: string | null = null;
  appData: SpecAppData | null = null;

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.appUuid = this.route.snapshot.params['application_uuid'];
    this.specAppData();
  }

  specAppData() {
    axios.get(`http://192.168.110.74:8080/application/${this.appUuid}`)
      .then((response) => {
        this.appData = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          console.log(error.response.data.message);
        }
      });
  }

  onUpdateApp() {
    const token = this.cookieService.get('userToken');
    const requestData = {
      application_code: this.appData?.application_code,
      application_title: this.appData?.application_title,
      application_description: this.appData?.application_description,
    };
    axios.put(`http://192.168.110.74:8080/superadmin/application/update/${this.appUuid}`, 
    requestData,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          icon: 'success',
          title: 'Application has been updated',
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['/list-all-application']);
      })
      .catch((error) => {
        if(error.response.status === 422) {
          console.log(error.response.data.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          });
        } else if(error.response.status === 500) {
          console.log(error.response.data.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          });
        } else if(error.response.status === 400) {
          console.log(error.response.data.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          });
        } else (
          console.log(error)
        )
      }); 
    } 
}