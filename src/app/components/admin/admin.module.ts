import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { PassengersComponent } from './passengers/passengers.component';


@NgModule({
  declarations: [AstronautsComponent, PassengersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
