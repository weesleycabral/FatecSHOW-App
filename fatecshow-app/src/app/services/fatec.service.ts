import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Disciplinas } from '../models/Disciplinas';

@Injectable({
  providedIn: 'root'
})
export class FatecService {

  private baseURL = 'http://localhost:17200/';
  public disciplinas: Disciplinas[];

  constructor(private http: HttpClient) {
    this.getDisciplinas().subscribe((disciplinas: Disciplinas[]) => {
      this.disciplinas = disciplinas;
    });
  }

  login(conta) {
    return this.http.post(this.baseURL + 'login', conta, { responseType: 'text' });
  }

  getUser() {
    return this.http.get(this.baseURL + 'perfil');
  }

  getNotas() {
    return this.http.get(this.baseURL + 'notas');
  }

  getDisciplinas() {
    return this.http.get(this.baseURL + 'disciplinas');
  }

  getHorarios() {
    return this.http.get(this.baseURL + 'horarios');
  }

}
