// import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";

import { SucessoCadastro } from "./pages/sucesso-cadastro/sucesso-cadastro";
import { Cadastro } from "./pages/cadastro/cadastro";

export const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "cadastro",
  },
  {
    path: "cadastro",
    component: Cadastro,
  },
  {
    path: "sucesso",
    component: SucessoCadastro,
  },
];
