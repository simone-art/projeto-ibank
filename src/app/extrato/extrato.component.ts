import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.css']
})
export class ExtratoComponent implements OnInit {

  extratos: {
    id: number;
    contaCliente: number;
    saldoConta: number;
    descricao: string;
  }[];

  constructor(private extratoService: ExtratoService) {
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
}
