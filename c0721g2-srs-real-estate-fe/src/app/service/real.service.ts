import { Injectable } from '@angular/core';

import {Direction} from '../model/real/direction';
import {RealEstateType} from '../model/real/real-estate-type';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RealEstateNew} from '../model/real/real-estate-new';

@Injectable({
  providedIn: 'root'
})
export class RealService {
  private url = 'http://localhost:8080/api/real-estate-new';
  private urlRelated = 'http://localhost:8080/api/real-estate-related';

  constructor(private http: HttpClient) { }

  getAllDirection(): Observable<Direction[]>{
    return this.http.get<Direction[]>(this.urlRelated + '/direction');
  }

  getAllRealEstateType(): Observable<RealEstateType[]>{
    return this.http.get<RealEstateType[]>(this.urlRelated + '/realEstateType');
  }

  save(realEstateNew: RealEstateNew): Observable<RealEstateNew>{
    return this.http.post<RealEstateNew>(this.url, realEstateNew);
  }
}
