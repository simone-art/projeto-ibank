import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  numeroConta = '';
  numeroAgencia = '';
  senhaValor = '';
  router: any;

  constructor() { }
  ngOnInit(): void {
  }
  digitouNumero($event){
    this.numeroConta = $event.target.value;
    console.log($event.target.value);
  }

  digitouAgencia($event){
    this.numeroAgencia = $event.target.value;
    console.log($event.target.value);
  }

  digitouSenha($event){
    this.senhaValor = $event.target.value;
    console.log($event.target.value);
  }

  enviarDados(numeroConta, senhaValor){
    const numero = numeroConta.value;
    const senha = senhaValor.value;
    const novoSaldo = numeroConta - senhaValor;
    console.log ('seu novo saldo é' + novoSaldo);
    alert('Seu novo saldo é:'  + novoSaldo);
  }

}
