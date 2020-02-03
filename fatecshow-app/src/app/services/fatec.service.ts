import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FatecService {

  private baseURL = 'http://localhost:17200/';

  constructor(private http: HttpClient) { }

  login(conta) {
    return this.http.post(this.baseURL + 'login', conta, { responseType: 'text' });
  }

  getUser() {
    return this.http.get(this.baseURL + 'perfil');
  }

}
