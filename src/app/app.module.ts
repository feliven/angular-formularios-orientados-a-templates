import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { App } from './app';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
import { Cadastro } from './pages/cadastro/cadastro';
import { SucessoCadastro } from './pages/sucesso-cadastro/sucesso-cadastro';

@NgModule({
  declarations: [],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [],
})
export class AppModule {}
