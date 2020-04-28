import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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
  cliente: any;

  constructor(private http: HttpClient, private router: Router) { }
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

  enviarDados(){
    console.log ('Babú perdeu o Big Brother');
    this.http.post('https://ibanklogin20200427194521.azurewebsites.net/api/clientes/login', {
      Conta: this.numeroConta,
      Agencia: this.numeroAgencia,
      Senha: this.senhaValor
    }).subscribe((dados: any) => {
      this.cliente = dados;
      localStorage.setItem("cliente", JSON.stringify(this.cliente));
      this.router.navigate(['home']);
      console.log(this.cliente);
    });
  }


  redirect() {
      this.router.navigate(['home']);
  }

}
