import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  numeroConta = '';
  saldoConta = '';
  descricao = '';
  data = '';

  cliente: any;

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.http.post('https://ibanklogin20200427194521.azurewebsites.net/api/clientes/login', {
          numeroConta: this.numeroConta,
          saldoConta: this.saldoConta,
          descricao: this.descricao,
          data: this.data
        }).subscribe((dados: any) => {
          this.cliente = dados;
          localStorage.setItem('cliente', JSON.stringify(this.cliente));
        });
      }
      voltarTransferencia($event){
        console.log('funciona botão');
        this.router.navigate(['/transferencia']);
    }
}
