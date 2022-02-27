import { Component, OnInit } from '@angular/core';
import {AstronautInterface} from '../../../../interfaces/astronaut-interface';
import {PassengerInterface} from '../../../../interfaces/passenger-interface';
import {Router} from '@angular/router';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  astronaut: AstronautInterface;
  passenger: PassengerInterface;
  infoType: string;
  constructor(private router: Router,
              private userService: UserService) {
  }

  ngOnInit(): void {
    const type = this.userService.getCurrentUser();
    this.infoType = (type === 'astronaut') ? 'Astronauta' : 'Pasajero';
  }


  logout(): void {
    this.router.navigateByUrl('/login').then( () => {
      localStorage.removeItem('type');
      localStorage.removeItem('token');
    });
  }
}
