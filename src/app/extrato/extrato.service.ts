import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Extrato } from './extrato.interfaces';

@Injectable({
  providedIn: 'root'
})

export class ExtratoService {

  constructor(private http: HttpClient) {

  }
  getExtratos() {
   return this.http.get<[Extrato]>('http://localhost:50750/api/extrato');
  }
}
