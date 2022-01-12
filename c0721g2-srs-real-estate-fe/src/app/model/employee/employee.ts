import {Degree} from './degree';
import {AppUser} from '../security/app-user';
import {Image} from '../image/image';

export interface Employee {
  id: string;
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  dateOfBirth: string;
  idCard: string;
  gender: number;
  degree: Degree;
  position: Position;
  appUser: AppUser;
  image: Image;
}
