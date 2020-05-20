import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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

  user: any;
  form: any;


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

  onSubmit(form){
    console.log(form.value);
  }


  enviarDados($event){
    $event.preventDefault();
    console.log ('Babú perdeu o Big Brother');

    this.http.post('https://ibank20200430024938.azurewebsites.net/api/users/login', {
      Account: this.numeroConta,
      Agency: this.numeroAgencia,
      Password: this.senhaValor
    }).subscribe((dados: any) => {
<<<<<<< HEAD
      this.cliente = dados;
      localStorage.setItem('cliente', JSON.stringify(this.cliente));
      try {
        this.router.navigate(['home']);
        console.log(this.cliente);
      }
      catch (error){
        this.errormensagem();
        console.log('Usuário não existe');
=======
      this.user = dados;
      localStorage.setItem('user', JSON.stringify(this.user));
      try {
        this.router.navigate(['/transferencia']);
        console.log(this.user);
      }
      catch (error){
        alert('Usuário não existe. Tente de novo e escreva seus dados corretamente');
>>>>>>> 25e1daa82611bce008947c01230b991a251354a4
      }
    });
  }

  redirect() {
<<<<<<< HEAD
    this.router.navigate(['home']);
  }

  errormensagem(){
    alert('Usuário não existe. Tente de novo e escreva seus dados corretamente');
=======
    this.router.navigate(['/transferencia']);
>>>>>>> 25e1daa82611bce008947c01230b991a251354a4
  }

  errormensagem(){
    alert('Usuário não existe. Tente de novo e escreva seus dados corretamente');
  }
}


