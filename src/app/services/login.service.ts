import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  sendData(email: string, password: string): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}/app/api/v1/user/login`, {email, password});
  }
}
