import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import Swal from 'sweetalert2';


interface SpecDivisionData {
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


@Component({
  selector: 'app-edit-division',
  templateUrl: './edit-division.component.html',
  styleUrls: ['./edit-division.component.css']
})
export class EditDivisionComponent implements OnInit {

  divisionUuid: string | null = null;
  divisionData: SpecDivisionData | null = null;
  
  constructor(private route: ActivatedRoute, private cookieService: CookieService, private router: Router) {}

  ngOnInit(): void {
    this.divisionUuid = this.route.snapshot.params['division_uuid'];
    this.specDivisionData();
  }

  specDivisionData() {
    axios.get(`http://192.168.110.74:8080/division/${this.divisionUuid}`)
      .then((response) => {
        this.divisionData = response.data;
        console.log(response.data);
      })
      .catch((error) => {
        if (error.response.status === 500) {
          console.log(error.response.data.message);
        }
      });
  }
  
  onUpdateDivision() {
    const token = this.cookieService.get('userToken');
    const requestData = {
      division_code: this.divisionData?.division_code,
      division_title: this.divisionData?.division_title
    };
    axios.put(`http://192.168.110.74:8080/superadmin/division/update/${this.divisionUuid}`, 
    requestData,
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
        this.router.navigate(['/list-all-division']);
      })
      .catch((error) => {
        if (error.response.status === 400) {
          Swal.fire({
            title: 'Error',
            text: error.response.data.message,
            icon: 'error'
          });
        } else if (error.response.status === 422) {
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
}
