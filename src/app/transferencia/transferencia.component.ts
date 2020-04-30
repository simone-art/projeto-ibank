import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-transferencia',
  templateUrl: './transferencia.component.html',
  styleUrls: ['./transferencia.component.css']
})
export class TransferenciaComponent implements OnInit {

  numeroConta = '';
  contaDestinatario = '';
  valorTransferido = '';
  cliente: any;


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  contaCliente($event){
    this.numeroConta = $event.target.value;
    console.log($event.target.value);
  }

  digitaContaDestinatario($event){
    this.contaDestinatario = $event.target.value;
    console.log($event.target.value);
  }

  digitaValorTransferir($event){
    this.valorTransferido = $event.target.value;
    console.log($event.target.value);
  }
  enviarTransferencia($event){
    $event.preventDefault();
    console.log('Babú perdeu o Big Brother');
    alert('Transação efetuada com sucesso');

  }

}

