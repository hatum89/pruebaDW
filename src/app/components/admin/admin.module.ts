import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {SharedModule} from '../shared/shared.module';
import { AstronautsComponent } from './astronauts/astronauts.component';
import { PassengersComponent } from './passengers/passengers.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin.component';
import {MatTableModule} from '@angular/material/table';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AlertsComponent } from './alerts/alerts.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {CardInfoComponent} from '../card-info/card-info.component';
import {NoImagePipe} from '../../pipe/no-image.pipe';


@NgModule({
  declarations: [AstronautsComponent, PassengersComponent, NavbarComponent, AdminComponent, AlertsComponent , CardInfoComponent, NoImagePipe],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule
  ]
})
export class AdminModule { }
