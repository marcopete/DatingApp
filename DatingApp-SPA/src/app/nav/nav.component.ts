import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model).subscribe(next => {
      console.log('Logueado exitosamente');
    }, error => {
      console.log('Login erroneo');
    });
  }

  loggedIn(){
    const token = localStorage.getItem('token');
    return !!token; // variable token con !! si contiene valor retorna true, si viene vacio retorna false
  }

  logout() {
    localStorage.removeItem('token');
    console.log('cerraste sesion ql');
  }

}
