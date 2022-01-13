import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RealEstateNew} from '../model/real/real-estate-new';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  private API_URL = ' http://localhost:8080/api/real-estate-new';
  private API_URL_HISTORY_POST = ' http://localhost:8080/api/real-estate-new/history-post';
  private API_URL_EMAIL = ' http://localhost:8080/api/real-estate-new/email';

  constructor(private httpClient: HttpClient) {
  }
  findRealEstateNewById(id: string): Observable<RealEstateNew> {
    return this.httpClient.get<RealEstateNew>(this.API_URL + '/' + id);
  }

  findHistoryPostBySearchFieldId(customerId, title, kindOfNew, realNewType): Observable<RealEstateNew[]> {
    return this.httpClient.get<RealEstateNew[]>
    (this.API_URL_HISTORY_POST + '?customerId=' + customerId + '&&title=' + title + '&&kindOfNew=' + realNewType);
  }

  sendMail(customerMail, name, phone): Observable<string> {
    return this.httpClient.post<string>
    (this.API_URL_EMAIL + '?customerMail=' + customerMail + '&&name=' + name + '&&phone=' + phone, '');
  }
}
