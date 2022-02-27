import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserInterface} from '../../../../interfaces/user-interface';
import {StarshipService} from '../../../services/starship.service';
import {AstronautInterface} from '../../../../interfaces/astronaut-interface';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.scss']
})
export class AstronautsComponent implements OnInit {
  usersData: AstronautInterface[];
  ships: any;
  id: string;
  currentUser: AstronautInterface[];
  constructor( private userService: UserService,
               private starShipService: StarshipService,
               private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.usersData = users.usersData.filter(data => data.userType === 'astronaut');
        // tslint:disable-next-line:triple-equals
        this.currentUser = users.usersData.filter(data => data.id == this.id);
        this.userService.setCurrentUser = this.currentUser[0].name;
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
