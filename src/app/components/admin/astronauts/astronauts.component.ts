import {Component, OnInit} from '@angular/core';
import {UserService} from '../../../services/user.service';
import {UserInterface} from '../../../../interfaces/user-interface';
import {StarshipService} from '../../../services/starship.service';
import {AstronautInterface} from '../../../../interfaces/astronaut-interface';
import {ActivatedRoute} from '@angular/router';
import {ModalInfoComponent} from '../../modal-info/modal-info.component';
import {MatDialog} from '@angular/material/dialog';
import {ShipsInterface} from '../../../../interfaces/ships-interface';
import Swal from 'sweetalert2';
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
  showMessageShip: boolean;
  showMessageAstronaut: boolean;
  showButtonSearch: boolean;
  showButtonSearchUser: boolean;

  constructor(private userService: UserService,
              private starShipService: StarshipService,
              private activatedRoute: ActivatedRoute,
              private matDialog: MatDialog) {
    this.showMessageShip = false;
    this.showMessageAstronaut = false;
    this.showButtonSearch = true;
    this.showButtonSearchUser = true;
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.loadMethodAstronaut();
    this.loadMethodShip();
  }

  // tslint:disable-next-line:typedef
  searchMethod(userSearch: string) {

    if (userSearch === undefined) {
      this.showMessageAstronaut = true;
      this.message = 'El campo de busqueda esta vacío';
      return;
    }
    if ((this.usersDataCopy.filter(userData => userData.name === userSearch)).length === 0) {
      this.showMessageAstronaut = true;
      this.message = 'La el piloto no existe por favor vuelva a buscar, verifique los espacios';
    }
    if (userSearch !== undefined) {
      this.showMessageAstronaut = false;
      this.showButtonSearchUser = false;
      this.usersData = this.usersDataCopy.filter(userData => userData.name === userSearch);

    }
  }

  // tslint:disable-next-line:typedef
  itemMethod(user: UserInterface) {
    console.log(user);
    const dialogRef = this.matDialog.open(ModalInfoComponent, {
      data: user
    });
  }

  // tslint:disable-next-line:typedef
  searchMethodShip(shipSearch: string) {
    if (shipSearch === undefined) {
      this.showMessageShip = true;
      this.message = 'El campo de busqueda esta vacío';
      return;
    }
    if ((this.shipsCopy.filter(shipData => shipData.name === shipSearch)).length === 0) {
      this.showMessageShip = true;
      this.message = 'La nave no existe por favor vuelva a buscar';
    }
    if (shipSearch !== undefined) {
      this.showButtonSearch = false;
      this.showMessageShip = false;
      this.shipsCopy = this.shipsCopy.filter(shipData => shipData.name === shipSearch);
    }
  }

  // tslint:disable-next-line:typedef
  createMethodShip(shipSearch) {
    const nextId = this.shipsCopy.length + 1;
    const ship: ShipsInterface = {id: nextId, name: shipSearch};
    this.shipsCopy.push(ship);
    localStorage.setItem('ship', JSON.stringify(this.shipsCopy));
  }
  // tslint:disable-next-line:typedef
  editShip(shipSearch , i){
    if (shipSearch === undefined){
      this.showMessageShip = true;
      this.message = 'El campo de edición esta vacío';
      return;
    }
    const startShipUpadate = this.shipsCopy.map(shipCopy => shipCopy.id === i ?
      {...shipCopy, name: shipSearch} : shipCopy) ;
    this.shipsCopy = startShipUpadate;
    localStorage.setItem('ship', JSON.stringify(this.shipsCopy));
    console.log(startShipUpadate);
  }
  // tslint:disable-next-line:typedef
  deletedShip(i: number) {
    Swal.fire({
      title: '¿Desea eliminar una nave?',
      showDenyButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: `Salir`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.shipsCopy.splice(i, 1);
        localStorage.setItem('ship', JSON.stringify(this.shipsCopy));
      } else if (result.isDenied) {
      }
    });
  }

  // tslint:disable-next-line:typedef
  loadMethodShip() {
    this.showButtonSearch = true;
    this.starShipService.getStarship()
      .subscribe((ships: any) => {
        this.ships = ships.starship;
        this.shipsCopy = ships.starship;
        localStorage.setItem('ship', JSON.stringify(this.shipsCopy));
        console.log(this.shipsCopy);
      });
  }

  // tslint:disable-next-line:typedef
  loadMethodAstronaut() {
    this.userService.getUsers()
      .subscribe((users: any) => {
        this.usersDataCopy = users.usersData;
        this.usersData = users.usersData.filter(userData => userData.userType === 'astronauta' && userData.id != this.id);
        // tslint:disable-next-line:triple-equals
        this.currentUser = users.usersData.filter(data => data.id == this.id);
        this.userService.setCurrentUser = this.currentUser[0].name;
      });
  }
}
