import { Router } from "@angular/router";
import { Component, OnInit, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm, Validators } from "@angular/forms";

import { InterfaceCadastro } from "../../interfaces/interface-cadastro";
import { MensagemErro } from "src/app/components/mensagem-erro/mensagem-erro";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.html",
  imports: [CommonModule, FormsModule, MensagemErro],
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

  ngOnInit(): void {}

  constructor(private router: Router) {}

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
