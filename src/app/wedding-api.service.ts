import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class WeddingApiService {

  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  getData(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/app/api/v1/section`)
  }

  post(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/app/api/v1/user/login`, {email, password});
  }

  put(data): Observable<any> {
    const accessToken = localStorage.getItem('accessToken');
    const authHeader = new HttpHeaders().set('Authorization', 'Bearer ' + accessToken);

    return this.httpClient.put<any>(`${this.baseUrl}/app/api/v1/section/service`, data, {headers: authHeader});
  }
}
