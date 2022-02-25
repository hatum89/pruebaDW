import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserInterface} from '../../../../interfaces/user-interface';

@Component({
  selector: 'app-astronauts',
  templateUrl: './astronauts.component.html',
  styleUrls: ['./astronauts.component.scss']
})
export class AstronautsComponent implements OnInit {
  usersData: UserInterface[];
  constructor( private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.usersData = users.usersData.filter(data => data.userType === 'astronaut');
        console.log(this.usersData);
      });
  }

}
