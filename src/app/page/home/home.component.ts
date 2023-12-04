import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

interface Application {
  application_uuid: string;
  application_title: string;
}

interface Role {
  role_uuid: string;
  role_title: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  form!: FormGroup;
  dataListApplication: Application[] = [];
  dataListRole: Role[] = [];

  role_code: string = '';
  role_title: string = '';

  division_code: string = '';
  division_title: string = '';

  application_code: string = '';
  application_title: string = '';
  application_description: string = '';

  application_uuid: string = '';
  role_uuid: string = '';


  constructor(private cookieService: CookieService, private fb: FormBuilder) {}


  ngOnInit(): void {
    this.form = this.fb.group({
      application_code: '',
      role_code: '',
    });

    this.appData();
    this.roleData();
  }

  onAddRole() {
    const token = this.cookieService.get('userToken');

    axios.post(`http://192.168.110.105:8080/superadmin/role/add`,
    { role_code: this.role_code, role_title: this.role_title }, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response.data.message);
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success'
      });
    })
    .catch((error) => {
      if(error.response.status === 400) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else if(error.response.status === 422) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else if (error.response.status === 500) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Terjadi kesalahan',
          icon: 'error'
        });
      }
    });
  }

  onAddDivision() {
    const token = this.cookieService.get('userToken');

    axios.post(`http://192.168.110.105:8080/superadmin/division/add`,
    { division_code: this.division_code, division_title: this.division_title }, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response.data.message);
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success'
      });
    })
    .catch((error) => {
      if(error.response.status === 400) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else if(error.response.status === 422) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else if (error.response.status === 500) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Terjadi kesalahan',
          icon: 'error'
        });
      }
    });
  }

  onAddApp() {
    const token = this.cookieService.get('userToken');

    axios.post(`http://192.168.110.105:8080/superadmin/application/add`,
    { application_code: this.application_code, application_title: this.application_title, application_description: this.application_description }, 
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response.data.message);
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success'
      });
    })
    .catch((error) => {
      if(error.response.status === 400) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else if(error.response.status === 422) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else if (error.response.status === 500) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Terjadi kesalahan',
          icon: 'error'
        });
      }
    });
  }

  onAddAppRole() {
    const token = this.cookieService.get('userToken');

    const dataToSend = {
      application_uuid: this.form.value.application_uuid,
      role_uuid: this.form.value.role_uuid
    };
    
    axios.post(`http://192.168.110.105:8080/superadmin/application/role/add`, dataToSend,
    {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
    .then((response) => {
      console.log(response.data.message);
      Swal.fire({
        title: 'Success',
        text: response.data.message,
        icon: 'success'
      });
    })
    .catch((error) => {
      if(error.response.status === 400) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else if(error.response.status === 422) {
        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else if (error.response.status === 500) {

        Swal.fire({
          title: 'Error',
          text: error.response.data.message,
          icon: 'error'
        });
      } else {
        Swal.fire({
          title: 'Error',
          text: 'Terjadi kesalahan',
          icon: 'error'
        });
      }
    });
  }

  // GET DATA
  appData() {
    axios.get('http://192.168.110.105:8080/application/all')
    .then((response) => {
      this.dataListApplication = response.data;
      console.log(response.data);
    })
    .catch((error) => {
      if(error.response.status === 500) {
        console.log(error.response.data.message)
      }
    })
  }

  roleData() {
    axios.get('http://192.168.110.105:8080/role/all')
    .then((response) => {
      this.dataListRole = response.data;
      console.log(response.data);
    })
    .catch((error) => {
      if(error.response.status === 500) {
        console.log(error.response.data.message)
      }
    })
  }
}
