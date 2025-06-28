import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  usuario: string = '';
  password: string = '';
  apellidos: string = '';
  constructor() { }

  ngOnInit() {
  }

  capturarDatos(){
    console.log("Usuario ->", this.usuario);
    console.log("Usuario ->", this.password);
    // console.log("Usuario ->", this.apellidos);
  }

}
