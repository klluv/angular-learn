import { Component } from '@angular/core';
import axios from 'axios';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData = {
    user_email: '',
    user_password: '',
  };

  constructor(private router: Router, private cookieService: CookieService) {}
  
  onLogin() {
    axios.post('http://localhost:8080/login', this.loginData)
    .then((response) => {
      console.log(response.data.message);
      Swal.fire({
        title: "Success",
        text: "Login berhasil",
        icon: "success"
      });      
      this.cookieService.set('userToken', response.data.token);
      this.router.navigateByUrl('/main');
    })
    .catch((error) => {
      if(error.response.status === 401) {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error" 
        });
      } else if(error.response.status === 500) {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error"
        });
      } else {
        Swal.fire({
          title: "Error",
          text: error.response.data.message,
          icon: "error"
        });
      }
    });
  }
}

