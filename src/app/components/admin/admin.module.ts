import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { PassengersComponent } from './passengers/passengers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [AstronautsComponent, PassengersComponent, NavbarComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    FormsModule
  ]
})
export class AdminModule { }
