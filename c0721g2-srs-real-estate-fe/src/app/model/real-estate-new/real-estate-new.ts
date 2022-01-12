import {Customer} from '../customer/customer';
import {Direction} from './direction';
import {RealEstateType} from './real-estate-type';

export interface RealEstateNew {
  id: string;
  address: string;
  approval: number;
  area: number;
  description: string;
  kindOfNew: string;
  price: number;
  title: string;
  status: string;
  customer: Customer;
  direction: Direction;
  realEstateType: RealEstateType;

}
