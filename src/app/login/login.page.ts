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
  validarPassword(password: string): boolean {
      const passwordRegex = /^[0-9]{4}$/;
      return passwordRegex.test(password);
    }

  ingresar(){

    if (!this.user.usuario) {
      this.mostrarAlerta('El campo de usuario es obligatorio.');
      return;
    }
    if (!this.validarEmail(this.user.usuario) && this.user.usuario.length > 3 && this.user.usuario.length < 9) {
      this.mostrarAlerta('Por favor, ingrese un correo electrónico válido.');
      return;
    }
    if (!this.user.password) {
      this.mostrarAlerta('El campo de contraseña es obligatorio.');
      return;
    }
    if (!this.validarPassword(this.user.password)) {
      this.mostrarAlerta('La contraseña debe tener exactamente 4 dígitos (0-9)');
      return;
    }

    
    this.router.navigate(['/home'], { state: { user: this.user }});
  }


}
