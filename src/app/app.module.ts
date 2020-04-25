import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { ContainerBemvindosComponent } from './container-bemvindos/container-bemvindos.component';
import { ContainerBeneficiosComponent } from './container-beneficios/container-beneficios.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    ContainerBemvindosComponent,
    ContainerBeneficiosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
