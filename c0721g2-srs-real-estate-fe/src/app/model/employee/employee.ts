import {Degree} from './degree';
import {AppUser} from '../user/app-user';
import {Image} from '../image/image';
import {Positions} from './positions';

export interface Employee {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;
  idCard: string;
  gender: number;
  degreeDTO: Degree;
  positionDTO: Positions;
  roleDTO: number;
  appUser: AppUser;
  image: Image;
}
