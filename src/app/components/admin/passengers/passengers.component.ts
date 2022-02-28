import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {PassengerInterface} from '../../../../interfaces/passenger-interface';
import {UserService} from '../../../services/user.service';
import {StarshipService} from '../../../services/starship.service';
import {ActivatedRoute} from '@angular/router';
import {CountriesService} from '../../../services/countries.service';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit, AfterViewInit {
  usersData: PassengerInterface;
  idP: string;
  currentUser: PassengerInterface;
  listCountry: any;
  @ViewChild('background') background: ElementRef;

  constructor(private userService: UserService,
              private starShipService: StarshipService,
              private activatedRoute: ActivatedRoute,
              private countriesService: CountriesService,
              private render2: Renderer2) {
    this.idP = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.usersData = users.usersData.filter(data => data.userType === 'astronaut');
        // tslint:disable-next-line:triple-equals
        this.currentUser = users.usersData.filter(data => data.id == this.idP);
        this.userService.setCurrentUser = this.currentUser[0].name;
      });
    this.countriesService.getCountries()
      .subscribe((contries: any) => {
        this.listCountry = contries.country;
      });
  }

  ngAfterViewInit(): void {
       this.change();
    }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  change() {
    if (document.body.classList.contains('dark-mode')){
      const background = this.background.nativeElement;
      this.render2.setStyle(background, 'color', '#000000');
    } else {
      const background = this.background.nativeElement;
      this.render2.setStyle(background, 'color', '#000000');
    }
  }
}
