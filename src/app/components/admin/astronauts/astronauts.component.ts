import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserInterface} from '../../../../interfaces/user-interface';
import {StarshipService} from '../../../services/starship.service';
import {AstronautInterface} from '../../../../interfaces/astronaut-interface';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.scss']
})
export class AstronautsComponent implements OnInit {
  usersData: UserInterface[];
  ships: any;
  dataSource: MatTableDataSource<any>;
  displayedColumns: string[] = ['user', 'email', 'name', 'secondName', 'available', 'Actions'];
  constructor( private userService: UserService,
               private starShipService: StarshipService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.usersData = users.usersData.filter(data => data.userType === 'astronaut');
        console.log(this.usersData);
      });
    this.starShipService.getStarship()
      .subscribe((ships: any) => {
        this.ships = ships.starship;
        console.log(this.ships);
      });
  }

  // tslint:disable-next-line:typedef
  itemMethod(user: UserInterface) {
    console.log(user);
  }
}
