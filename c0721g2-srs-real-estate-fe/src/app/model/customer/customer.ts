import {AppUser} from '../user/app-user';
import {Image} from '../image/image';

export interface Customer {
  id: string;
  address: string;
  dateOfBirth: string;
  email: string;
  gender: string;
  name: string;
  phoneNumber: string;
  appUserId: AppUser;
  image: Image;
}
