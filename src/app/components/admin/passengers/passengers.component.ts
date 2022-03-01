import {Component,OnInit} from '@angular/core';
import {PassengerInterface} from '../../../interfaces/passenger-interface';
import {UserService} from '../../../services/user.service';
import {StarshipService} from '../../../services/starship.service';
import {ActivatedRoute} from '@angular/router';
import {PlanetsService} from '../../../services/planets.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-passengers',
  templateUrl: './passengers.component.html',
  styleUrls: ['./passengers.component.scss']
})
export class PassengersComponent implements OnInit{
  form: FormGroup;
  usersData: PassengerInterface;
  idP: string;
  currentUser: PassengerInterface;
  listPlanet: any;

  constructor(private userService: UserService,
              private starShipService: StarshipService,
              private activatedRoute: ActivatedRoute,
              private countriesService: PlanetsService,
              private fb: FormBuilder) {
    this.idP = this.activatedRoute.snapshot.paramMap.get('id');
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.usersData = users.usersData.filter(data => data.userType === 'astronaut');
        // tslint:disable-next-line:triple-equals
        this.currentUser = users.usersData.filter(data => data.id == this.idP);
        this.userService.setCurrentUser = this.currentUser[0].name;
      });
    this.countriesService.getPlanet()
      .subscribe((planet: any) => {
        this.listPlanet = planet.planet;
      });

    this.form = this.fb.group({
         location: ['',Validators.required],
         wayOut: ['',Validators.required],
         arrival: ['',Validators.required],
         person: ['',Validators.compose([
           Validators.required,
           Validators.pattern("[0-9]{1,5}")
         ])]
     });
  }
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  sendForm() {
    console.log(this.form.value);
  }
}
