import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HomePageRoutingModule } from './home-routing.module';

import {provideNativeDateAdapter} from '@angular/material/core';


@NgModule({
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
