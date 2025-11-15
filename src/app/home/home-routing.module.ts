import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { monkeGuardGuard } from '../monke-guard-guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    canActivate: [monkeGuardGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule 
{}
