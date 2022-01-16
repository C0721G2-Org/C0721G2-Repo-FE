import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RealEstateNew} from '../model/real-estate-new/real-estate-new';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  private API_URL = ' http://localhost:8080/api/real-estate-new';
  private API_URL_HISTORY_POST = ' http://localhost:8080/api/real-estate-new/history-post';
  private API_URL_EMAIL = ' http://localhost:8080/api/real-estate-new/email';
  private API_URL_LIST = 'http://localhost:8080/list-real-estate-new/search';
  private API_URL_REAL_ESTATE_TYPE = 'http://localhost:8080/dealEstateType';
  private API_URL_DIRECTION = 'http://localhost:8080/direction';

  constructor(private httpClient: HttpClient) {
  }

  findRealEstateNewById(id: number): Observable<RealEstateNew> {
    return this.httpClient.get<RealEstateNew>(this.API_URL + '/' + id);
  }

  findHistoryPostBySearchFieldId(customerId, title, kindOfNew, realNewType) {
    return this.httpClient.get<RealEstateNew>
    (this.API_URL_HISTORY_POST + '?customerId=' + customerId + '&&title=' + name + '&&kindOfNew=' + realNewType);
  }

  getAllRealEstates(): Observable<any> {
    return this.httpClient.get(this.API_URL_LIST);
  }

  getAllRealEstatesByAdress(address: string, realEstateType: any, direction: any, minPrice: string, maxPrice: string, page: number): Observable<any> {
    return this.httpClient.get(this.API_URL_LIST +
      '?address=' + address +
      '&realEstateType=' + realEstateType +
      '&direction=' + direction +
      '&minPrice=' + minPrice +
      '&maxPrice=' + maxPrice +
      '&page=' + page
    );
  }

  // getAllRealEstatesByAdress(address: string): Observable<any> {
  //   return this.httpClient.get(this.API_URL_LIST + '?address=' + address);
  // }

  getAllRealEstateTypes(): Observable<any> {
    return this.httpClient.get(this.API_URL_REAL_ESTATE_TYPE);
  }

  getAllDirections(): Observable<any> {
    return this.httpClient.get(this.API_URL_DIRECTION);
  }
}
