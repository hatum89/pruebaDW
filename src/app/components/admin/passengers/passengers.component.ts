import { Component, OnInit } from '@angular/core';
import {PassengerInterface} from '../../../../interfaces/passenger-interface';
import {UserService} from '../../../services/user.service';
import {StarshipService} from '../../../services/starship.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit {
  usersData: PassengerInterface;
  idP: string;
  currentUser: PassengerInterface;

  constructor(private userService: UserService,
              private starShipService: StarshipService,
              private activatedRoute: ActivatedRoute) {
    this.idP = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.usersData = users.usersData.filter(data => data.userType === 'astronaut');
        // tslint:disable-next-line:triple-equals
        this.currentUser = users.usersData.filter(data => data.id == this.idP);
        this.userService.setCurrentUser = this.currentUser[0].name;
      });
  }

  ngOnInit(): void {
  }

}
