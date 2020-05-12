import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ExtratoService {

  constructor(private http: HttpClient) {

  }
  getExtratos() {
   return this.http.get<{
    id: number;
    contaCliente: number;
    saldoConta: number;
    descricao: string;
   }[]>('http://localhost:50750/api/extrato');
  }
}
