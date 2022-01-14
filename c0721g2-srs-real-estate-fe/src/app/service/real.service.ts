import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RealEstateNew} from '../model/real/real-estate-new';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  public API = 'http://localhost:8080/real-estate-new';

  constructor(private http: HttpClient) {
  }

  getAllListPostApproval(): Observable<any> {
    return this.http.get(this.API + '/list');
  }

  // getSearchPostApproval(kindOfNews: string, direction: string, realEstateType: string): Observable<RealEstateNew[]> {
  //   return this.http.get<RealEstateNew[]>(this.API + '/search?kind_of_news=' + kindOfNews + '&direction_id=' + direction + '&real_estate_type_id=' + realEstateType);
  // }

  search(area: number): Observable<RealEstateNew[]> {
    return this.http.get<RealEstateNew[]>(this.API + '/search?area=' + area);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  getById(id): Observable<RealEstateNew[]> {
    return this.http.get<RealEstateNew[]>(this.API + '/' + id).pipe();
  }
}
