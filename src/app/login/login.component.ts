import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valorDoInput = '';
  numeroConta = '';
  numeroAgencia = '';
  senhaValor = '';

  constructor() { }
  ngOnInit(): void {
  }
  enviarDados(){
    console.log ('Babú perdeu o Big Brother');
  }

  digitouNome($event){
    this.valorDoInput = $event.target.value;
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
