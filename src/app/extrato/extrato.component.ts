import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  contaCliente = '';
  ContaDestinatario = '';
  valorTransferido = '';
  descricao = '';
  data = '';

  cliente: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.post('https://ibanklogin20200427194521.azurewebsites.net/api/clientes/login', {
          contaCliente: this.contaCliente,
          ContaDestinatario: this.ContaDestinatario,
          valorTransferido: this.valorTransferido,
          descricao: this.descricao,
          data: this.data
        }).subscribe((dados: any) => {
          this.cliente = dados;
          localStorage.setItem('cliente', JSON.stringify(this.cliente));
        });
    }
}
