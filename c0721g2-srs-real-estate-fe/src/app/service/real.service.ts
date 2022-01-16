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
  // khaipn
  private API_URL_LIST = 'http://localhost:8080/api/real-estate-new/search';
  // khaipn
  private API_URL_REAL_ESTATE_TYPE = 'http://localhost:8080/dealEstateType';
  // khaipn
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
// khaiPN
  getAllRealEstates(): Observable<any> {
    return this.httpClient.get(this.API_URL_LIST);
  }

// KhaiPN
  getAllRealEstatesSearch(address: string, realEstateType: any, direction: any, minArea: any, maxArea: any, minPrice: string, maxPrice: string, page: number = 0): Observable<any> {
    const stringParam = this.buildSearchParam('?address=', address) +
      this.buildSearchParam('&realEstateType=', realEstateType) +
      this.buildSearchParam('&direction=', direction) +
      this.buildSearchParam('&minArea=', minArea) +
      this.buildSearchParam('&maxArea=', maxArea) +
      this.buildSearchParam('&minPrice=', minPrice) +
      this.buildSearchParam('&maxPrice=', maxPrice) +
      this.buildSearchParam('&page=', page);

    return this.httpClient.get(this.API_URL_LIST +
      stringParam
    );
  }

// khaiPN
  getAllRealEstateTypes(): Observable<any> {
    return this.httpClient.get(this.API_URL_REAL_ESTATE_TYPE);
  }

// khaiPN
  getAllDirections(): Observable<any> {
    return this.httpClient.get(this.API_URL_DIRECTION);
  }

// khaiPN
  private buildSearchParam(searchKey: string, value: string | number): string {
    if (!value) {
      return searchKey + '';
    }
    return searchKey + value.toString();
  }
}
