import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }
  cliente: any;


  ngOnInit(): void {
  if (!localStorage.getItem('cliente')){
      this.router.navigateByUrl('');
      return;
    }
  this.cliente = JSON.parse(localStorage.getItem('cliente'));
  }
}
