export interface PassengerInterface {
  id: number;
  userType: string;
  name: string;
  password: string;
  ship?: string[];
  location: string;
  arrive: string;
  goOut: string;
  passengerNumber: number;
}
