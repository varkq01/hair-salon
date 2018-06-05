import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class GlobalService {
  private apiUrl = 'http://localhost:3000/api';
  public pendingRequests = [];
  public loadingData = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  public get(url: string, options?) {
    this.pendingRequests.push(url);

    return this.http.get(
      `${this.apiUrl}${url}`,
      options || { headers: this.getHeaders() }
    );
  }

  public post(url: string, body?, options?) {
    this.pendingRequests.push(url);
    console.log(this.pendingRequests.length);
    const opt = options || { headers: this.getHeaders() };
    return this.http.post(
      `${this.apiUrl}${url}`,
      body,
      options || { headers: this.getHeaders() }
    );
  }

  public put(url: string, body?, options?) {
    this.pendingRequests.push(url);

    return this.http.put(
      `${this.apiUrl}${url}`,
      options || { headers: this.getHeaders() }
    );
  }

  public delete(url: string, options?) {
    this.pendingRequests.push(url);

    return this.http.delete(
      `${this.apiUrl}${url}`,
      options || { headers: this.getHeaders() }
    );
  }

  public getHeaders(): HttpHeaders {
    const token = this.getAuthToken();
    const headers = new HttpHeaders({
      'x-auth': token
    });
    return headers;
  }

  public setUser(user: {
    email: string;
    _id: string;
    firstName: string;
    lastName: string;
  }): void {
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  public getUser() {
    const userString = sessionStorage.getItem('user');
    try {
      return JSON.parse(userString);
    } catch (e) {
      return undefined;
    }
  }

  public getAuthToken(): string {
    return sessionStorage.getItem('x-auth');
  }

  public clearSession(): void {
    sessionStorage.removeItem('x-auth');
    sessionStorage.removeItem('user');
  }
}
