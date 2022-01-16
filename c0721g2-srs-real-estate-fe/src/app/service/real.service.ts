import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RealEstateNew} from '../model/real/real-estate-new';
import {Direction} from '../model/real/direction';
import {RealEstateType} from '../model/real/real-estate-type';
import {Email} from '../model/real/email';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  public API = 'http://localhost:8080/real-estate-new';
  private API_URL = ' http://localhost:8080/api/real-estate-new';
  private API_URL_RELATED = 'http://localhost:8080/api/real-estate-related';
  private API_URL_HISTORY_POST = ' http://localhost:8080/api/real-estate-new/history-post';
  private API_URL_EMAIL = ' http://localhost:8080/api/real-estate-new/email';

  constructor(private http: HttpClient) {
  }

  getAllListPostApproval(): Observable<any> {
    return this.http.get(this.API + '/list');
  }

  search(kindOfNews: number, direction: number, realEstateType: number): Observable<RealEstateNew[]> {
    return this.http.get<RealEstateNew[]>(this.API + '/search?kind_of_news=' + kindOfNews + '&direction_id=' + direction + '&real_estate_type_id=' + realEstateType);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  getById(id): Observable<RealEstateNew[]> {
    return this.http.get<RealEstateNew[]>(this.API + '/' + id).pipe();
  }

  getAllDirection(): Observable<Direction[]> {
    return this.http.get<Direction[]>(this.API_URL_RELATED + '/direction');
  }

  getAllRealEstateType(): Observable<RealEstateType[]> {
    return this.http.get<RealEstateType[]>(this.API_URL_RELATED + '/realEstateType');
  }

  save(realEstateNew: RealEstateNew): Observable<RealEstateNew> {
    return this.http.post<RealEstateNew>(this.API_URL, realEstateNew);
  }


  findRealEstateNewById(id: string): Observable<RealEstateNew> {
    return this.http.get<RealEstateNew>(this.API_URL + '/' + id);
  }

  findHistoryPostBySearchFieldId(page, customerId, title, kindOfNew, realNewType): Observable<RealEstateNew[]> {
    return this.http.get<any>
    (this.API_URL_HISTORY_POST + '?page=' + page + '&customerId=' + customerId +
      '&title=' + title + '&kindOfNew=' + kindOfNew + '&realNewType=' + realNewType);
  }

  sendMail(email): Observable<Email> {
    return this.http.post<Email>(this.API_URL_EMAIL, email);
  }
}
