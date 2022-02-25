import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AstronautsComponent} from './astronauts/astronauts.component';
import {PassengersComponent} from './passengers/passengers.component';
import {AuthGuardAstronaut} from '../../authGuard/auth-guard-astronaut';
import {AutGuardPassenger} from '../../authGuard/aut-guard-passenger';

const routes: Routes = [
  {path: '', component: AdminComponent,
  children: [
    {path: 'astronaut', component: AstronautsComponent, canActivate: [ AuthGuardAstronaut ]},
    {path: 'passenger', component: PassengersComponent, canActivate: [AutGuardPassenger]},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
