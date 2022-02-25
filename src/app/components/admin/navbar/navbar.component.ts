import { Component, OnInit } from '@angular/core';
import {AstronautInterface} from '../../../../interfaces/astronaut-interface';
import {PassengerInterface} from '../../../../interfaces/passenger-interface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  astronaut: AstronautInterface;
  passenger: PassengerInterface;
  infoType: string;
  constructor(private router: Router) {
  }

  ngOnInit(): void {
    const type = localStorage.getItem('type');
    this.infoType = (type === 'astronaut') ? 'Astronauta' : 'Pasajero';
  }


  logout(): void {
    this.router.navigateByUrl('/login').then( () => {
      localStorage.removeItem('type');
    });
  }
}
