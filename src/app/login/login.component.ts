import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  InitialValue = 'Digite o seu usuário';

  constructor() { }
  ngOnInit(): void {
  }
  enviarDados(){
    console.log ('Babú perdeu o Big Brother');
  }

  digitouNome($event){
    console.log($event);

  }

}
