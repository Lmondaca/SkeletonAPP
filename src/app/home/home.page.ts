import { Component, ViewChild, ElementRef } from '@angular/core';
import {  Router } from '@angular/router';
import { ViewChildren } from '@angular/core';
import { AlertController, IonInput } from '@ionic/angular';
import type { Animation } from '@ionic/angular/standalone';
import { QueryList } from '@angular/core';
import { AnimationController } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  @ViewChildren(IonInput,{read: ElementRef }) texto_movs!: QueryList<ElementRef<HTMLInputElement>>;
//  @ViewChildren(IonCard, { read: ElementRef }) cardElements!: QueryList<ElementRef<HTMLIonCardElement>>;
  private animation!: Animation;
  sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
  data:any={
    nombre:"",
    apellido:"",
    education:"",
    nacimiento:""
  };
  usuario: any

    niveles:any[]=[
    {id:1,nivel:"Basica Incompleta"},
    {id:2,nivel:"Basica Completa"},
    {id:3,nivel:"Media Incompleta"},
    {id:4,nivel:"Media Completa"},
    {id:5,nivel:"Media Incompleta"},
    {id:6,nivel:"Superior Completa"}
  ]

  constructor( private alertController: AlertController,private animationCtrl: AnimationController) {
    const nav = history.state;
    if (nav && nav.user) {
      this.usuario= nav.user;
    } else {
      this.usuario = { username: 'Invitado' };
    }

    
  }
    ngAfterViewInit() {
    const input1 = this.animationCtrl
      .create()
      .addElement(this.texto_movs.get(0)!.nativeElement)
      .fromTo('transform', 'translateX(0px)', 'translateX(500px)');

    const input2 = this.animationCtrl
      .create()
      .addElement(this.texto_movs.get(1)!.nativeElement)
      .fromTo('transform', 'translateX(0px)', 'translateX(500px)');
    this.animation = this.animationCtrl
    .create()
    .duration(1000)
    .iterations(1)
    .addAnimation([input1, input2].filter(Boolean) as Animation[]);
    }

  async limpiar(){
    this.animation.play();
    await this.sleep(1000);
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})
    }
    this.animation.stop();
  }
  mostrar(){
    (this.data.nombre!="" && this.data.apellido!="") && 
    this.presentAlert("Usuario","Su nombre es "+this.data.nombre+" "+this.data.apellido);
  }
   async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}
