import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ContentService {

  constructor(private httpClient: HttpClient) {}

  readonly baseUrl: string = 'https://us-central1-cms-edu-2020-api.cloudfunctions.net';

  getData(): Observable<any> {
    return this.httpClient.get(`${this.baseUrl}/app/api/v1/section`)
  }
}