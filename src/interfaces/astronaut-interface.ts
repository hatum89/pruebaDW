import {UserInterface} from './user-interface';

export interface AstronautInterface extends UserInterface {
  astronaut?: string[];
  ship?: string[];
  passenger?: string[];
  rol?: string;
}
