import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  valorDoInput = '';

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

}
