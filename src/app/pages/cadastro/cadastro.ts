import { Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AbstractControl, FormsModule, NgForm, ValidationErrors, Validators } from "@angular/forms";

import { InterfaceCadastro } from "../../interfaces/interface-cadastro";
import { MensagemErro } from "../../components/mensagem-erro/mensagem-erro";
import { MaiorDeIdade } from "../../directives/maior-de-idade";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.html",
  imports: [CommonModule, FormsModule, MensagemErro, MaiorDeIdade],
  styleUrls: ["./cadastro.css"],
  standalone: true,
})
export class Cadastro implements OnInit {
  @ViewChild("formularioPreenchido") formularioPreenchido!: NgForm;

  formularioASerEnviado: InterfaceCadastro = {
    nome: "",
    nascimento: "",
    telefone: "",
    email: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  cadastrarFormulario(): void {
    if (this.formularioPreenchido.valid) {
      console.log(this.formularioASerEnviado);
      console.log(this.formularioPreenchido);
      console.log("Formulário enviado");
      this.router.navigate(["sucesso"]);
    } else {
      console.log("Formulário inválido");
    }
  }
}
