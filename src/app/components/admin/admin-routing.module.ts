import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AdminComponent} from './admin.component';
import {AstronautsComponent} from './astronauts/astronauts.component';
import {PassengersComponent} from './passengers/passengers.component';

const routes: Routes = [
  {path: '', component: AdminComponent,
  children: [
    {path: 'astronaut', component: AstronautsComponent},
    {path: 'passenger', component: PassengersComponent},
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
