import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';

interface SpecRoleData {
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

@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.css']
})
export class EditRoleComponent implements OnInit {

  roleUuid: string | null = null;
  roleData: SpecRoleData | null = null;

  constructor(private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.roleUuid = this.route.snapshot.params['role_uuid'];
    this.specRoleData();
  }

  specRoleData() {
    axios.get(`http://192.168.110.74:8080/role/${this.roleUuid}`)
      .then((response) => {
        this.roleData = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          console.log(error.response.data.message);
        }
      });
  }

  onUpdateRole() {
    const token = this.cookieService.get('userToken');
    const requestData = {
      role_code: this.roleData?.role_code,
      role_title: this.roleData?.role_title
    };
    axios.put(`http://192.168.110.74:8080/superadmin/role/update/${this.roleUuid}`, 
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
          title: 'Role has been updated',
          showConfirmButton: false,
          timer: 1500
        });
        this.router.navigate(['/list-all-role']);
      })
      .catch((error) => {
        if(error.response.status === 422) {
          console.log(error.response.data.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          })
        } else if(error.response.status === 400) {
          console.log(error.response.data.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          })
        } else if(error.response.status === 500) {
          console.log(error.response.data.message);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: error.response.data.message
          })
        } else (
          console.log(error)
        )
      });
  }
}

