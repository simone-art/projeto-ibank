import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
<<<<<<< HEAD
=======
import { TransferenciaComponent } from './transferencia/transferencia.component';
>>>>>>> 25e1daa82611bce008947c01230b991a251354a4
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
<<<<<<< HEAD
  {path: 'login/extrato', component: ExtratoComponent},
=======
  {path: 'transferencia', component: TransferenciaComponent},
  {path: 'extrato', component: ExtratoComponent},
>>>>>>> 25e1daa82611bce008947c01230b991a251354a4
  {path: '**', component: PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
