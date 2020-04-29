import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  contaCliente = '';
  ContaDestinatario = '';
  valorTransferido = '';
  cliente: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  enviarTransferencia($event){
    $event.preventDefault();
    console.log ('Babú perdeu o Big Brother');
    this.http.post('https://ibanklogin20200427194521.azurewebsites.net/api/clientes/login', {
      contaCliente: this.contaCliente,
      ContaDestinatario: this.ContaDestinatario,
      valorTransferido: this.valorTransferido
    }).subscribe((dados: any) => {
      this.cliente = dados;
      localStorage.setItem('cliente', JSON.stringify(this.cliente));
      try {
        console.log(this.cliente);
        alert('Transação efetuada com sucesso');
      }
      catch (error){
        alert('Transação não efetuada com sucesso');
        console.log('Usuário não existe');
      }
    });
  }

}


