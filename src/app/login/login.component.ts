import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valorNome = '';
  numeroConta = '';
  numeroAgencia = '';
  senhaValor = '';

  cliente = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }
  enviarDados(){
    console.log ('Babú perdeu o Big Brother');
    this.http.post("http://localhost:57434/api/clientes/login", {
      Conta: this.numeroConta,
      Agencia: this.numeroAgencia,
      Senha: this.senhaValor
    }).subscribe((dados: any)=>{
      this.cliente = dados;
      console.log(this.cliente)
    });

  }

  digitouNome($event){
    this.valorNome = $event.target.value;
    console.log($event.target.value);
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

}
