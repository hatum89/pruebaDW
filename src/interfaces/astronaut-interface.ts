export interface AstronautInterface {
  id: number;
  userType: string;
  name: string;
  password: string;
  ship?: string[];
  passenger?: string[];
}
