import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular'; 


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false,
})
export class LoginPage implements OnInit {

  user={
    usuario: "",
    password: ""
  }
  constructor(private router: Router, private alertController: AlertController ) { }

  async mostrarAlerta(mensaje: string) {
    const alert = await this.alertController.create({
      header: 'Error',
      message: mensaje,
      buttons: ['OK']
    });
    await alert.present();
  }


  ngOnInit() {
  }
  validarEmail(email: string): boolean {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

  ingresar(){

    if (!this.user.usuario) {
      this.mostrarAlerta('El campo de usuario es obligatorio.');
      return;
    }
    if (!this.validarEmail(this.user.usuario)) {
      this.mostrarAlerta('Por favor, ingrese un correo electrónico válido.');
      return;
    }
    if (!this.user.password) {
      this.mostrarAlerta('El campo de contraseña es obligatorio.');
      return;
    }
    if (this.user.password.length < 6) {
      this.mostrarAlerta('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    
    this.router.navigate(['/home'], { state: { user: this.user }});
  }


}
