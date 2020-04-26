import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { FooterIbankComponent } from './footer-ibank/footer-ibank.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContainerImagemsComponent } from './container-imagems/container-imagems.component';


@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    FooterIbankComponent,
    LoginComponent,
    HomeComponent,
    ContainerImagemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
