import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserInterface} from '../../../../interfaces/user-interface';
import {StarshipService} from '../../../services/starship.service';
import {AstronautInterface} from '../../../../interfaces/astronaut-interface';
import {ActivatedRoute} from '@angular/router';
import {ModalInfoComponent} from '../../modal-info/modal-info.component';
import {MatDialog} from '@angular/material/dialog';
import {ShipsInterface} from '../../../../interfaces/ships-interface';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.scss']
})
export class AstronautsComponent implements OnInit {
  usersData: AstronautInterface[];
  ships: ShipsInterface;
  id: string;
  currentUser: AstronautInterface[];
  userSearch: string;
  shipSearch: string;
  usersDataCopy: AstronautInterface[];
  shipsCopy: any;
  message: string;
  show: boolean;
  constructor( private userService: UserService,
               private starShipService: StarshipService,
               private activatedRoute: ActivatedRoute,
               private matDialog: MatDialog) {
    this.show = false;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.usersDataCopy = users.usersData;
        this.usersData = users.usersData.filter(userData => userData.userType === 'astronauta' && userData.id != this.id);
        // tslint:disable-next-line:triple-equals
        this.currentUser = users.usersData.filter(data => data.id == this.id);
        this.userService.setCurrentUser = this.currentUser[0].name;
      });
    this.starShipService.getStarship()
      .subscribe((ships: any) => {
        this.ships = ships.starship;
        this.shipsCopy = ships.starship;
        console.log(this.shipsCopy);
      });
  }

  // tslint:disable-next-line:typedef
  searchMethod(userSearch: string) {
    this.usersData = this.usersDataCopy.filter(userData => userData.name === userSearch);
    console.log(this.usersData);
  }
  // tslint:disable-next-line:typedef

  itemMethod(user: UserInterface) {
    console.log(user);
    const dialogRef = this.matDialog.open(ModalInfoComponent, {
      data: user
    });
  }
  searchMethodShip(shipSearch: string) {
    if (shipSearch) {
      this.show = true;
      this.message = 'El campo de busqueda esta vacío';
    }
    if (this.shipsCopy.filter(shipData => shipData.name === shipSearch)){
      this.ships = this.shipsCopy.filter(shipData => shipData.name === shipSearch);
    }
  }
}
