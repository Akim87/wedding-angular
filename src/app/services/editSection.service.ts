import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Section } from '../interfaces/section'

@Injectable()
export class EditSectionService {

  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  sendData(data: Section): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const authHeader = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);

    return this.httpClient.put<any>(`${this.baseUrl}/app/api/v1/section/service`, data, {headers: authHeader});
  }
}
