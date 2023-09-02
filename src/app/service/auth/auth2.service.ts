import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth2Service {
  constructor(private httpClient: HttpClient) {}

  signup(userName: string, password: string) {
    this.httpClient.post('', { userName: userName, password: password });
  }
}
