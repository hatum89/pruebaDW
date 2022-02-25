import {UserInterface} from './user-interface';

export interface PassengerInterface extends UserInterface {
  ship?: string[];
  location: string;
  arrive: string;
  goOut: string;
  passengersNumber: number;
}
