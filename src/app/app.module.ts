import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ContainerBemvindosComponent } from './container-bemvindos/container-bemvindos.component';
import { ContainerBeneficiosComponent } from './container-beneficios/container-beneficios.component';
import { ContaninerBeneficiosDosComponent } from './contaniner-beneficios-dos/contaniner-beneficios-dos.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContainerBemvindosComponent,
    ContainerBeneficiosComponent,
    ContaninerBeneficiosDosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
