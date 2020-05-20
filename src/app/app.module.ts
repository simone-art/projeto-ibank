import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterIbankComponent } from './footer-ibank/footer-ibank.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContainerImagemsComponent } from './container-imagems/container-imagems.component';
import { ContainerImagensDosComponent } from './container-imagens-dos/container-imagens-dos.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
<<<<<<< HEAD
=======
import { TransferenciaComponent } from './transferencia/transferencia.component';
>>>>>>> 25e1daa82611bce008947c01230b991a251354a4


@NgModule({
  declarations: [
    AppComponent,
    FooterIbankComponent,
    LoginComponent,
    HomeComponent,
    ContainerImagemsComponent,
    ContainerImagensDosComponent,
    ExtratoComponent,
<<<<<<< HEAD
    PageNotFoundComponent
=======
    PageNotFoundComponent,
    TransferenciaComponent
>>>>>>> 25e1daa82611bce008947c01230b991a251354a4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
