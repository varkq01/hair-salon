import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private apiUrl = 'http://localhost:3000/api';
  private pendingRequests = [];

  constructor(private http: HttpClient) {}

  public get(url: string, options?) {
    this.pendingRequests.push(url);

    return this.http
      .get(`${this.apiUrl}${url}`, options || { headers: this.getHeaders() })
      .pipe(response => {
        this.deletePendingRequest(url);
        return response;
      });
  }

  public post(url: string, body?, options?) {
    this.pendingRequests.push(url);
    console.log(this.pendingRequests.length);
    const opt = options || {headers: this.getHeaders()};
    return this.http
      .post(
        `${this.apiUrl}${url}`,
        body,
        options || { headers: this.getHeaders() }
      )
      .pipe(response => {
        this.deletePendingRequest(url);
        return response;
      });
  }

  public put(url: string, body?, options?) {
    this.pendingRequests.push(url);

    return this.http
      .put(`${this.apiUrl}${url}`, options || { headers: this.getHeaders() })
      .pipe(response => {
        this.deletePendingRequest(url);
        return response;
      });
  }

  public delete(url: string, options?) {
    this.pendingRequests.push(url);

    return this.http
      .delete(`${this.apiUrl}${url}`, options || { headers: this.getHeaders() })
      .pipe(response => {
        this.deletePendingRequest(url);
        return response;
      });
  }

  public getHeaders(): HttpHeaders {
    const token =  this.getAuthToken();
    const headers = new HttpHeaders({
      'x-auth': token
    });
    return headers;
  }

  public setUser(email: string, id: string): void {
    sessionStorage.setItem('user', JSON.stringify({ email, id }));
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

  private deletePendingRequest(url: string): void {
    this.pendingRequests.splice(this.pendingRequests.indexOf(url), 1);
    console.log(this.pendingRequests.length);    
  }
}
