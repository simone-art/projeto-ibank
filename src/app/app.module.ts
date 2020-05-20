import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterIbankComponent } from './footer-ibank/footer-ibank.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContainerImagemsComponent } from './container-imagems/container-imagems.component';
import { ContainerImagensDosComponent } from './container-imagens-dos/container-imagens-dos.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterIbankComponent,
    LoginComponent,
    HomeComponent,
    ContainerImagemsComponent,
    ContainerImagensDosComponent,
    ExtratoComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
