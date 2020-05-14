import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtratoService } from './extrato.service';
import { Extrato } from './extrato.interfaces';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extratos: Extrato[];


  constructor(private extratoService: ExtratoService, private router: Router) {
    console.log(extratoService);
  }

  ngOnInit() {
    console.log('chamou a getExtratos');
    this.extratoService.getExtratos()
    .subscribe(response => {
      this.extratos = response;
      console.log('obteve o retorno da getExtratos');
      console.log(response);
    });
  }
  voltarTranferencia($event){
    console.log('botâo funciona');
    this.router.navigate(['/transferencia']);
  }
}
