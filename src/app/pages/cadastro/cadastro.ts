import { Router } from "@angular/router";
import { Component, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";

import { InterfaceCadastro } from "../../interfaces/interface-cadastro";
import { MensagemErro } from "../../components/mensagem-erro/mensagem-erro";
import { MaiorDeIdade } from "../../directives/maior-de-idade";
import { ConsultaCepService } from "src/app/services/consulta-cep-service";
import { Observable, Subscription } from "rxjs";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.html",
  imports: [CommonModule, FormsModule, MensagemErro, MaiorDeIdade],
  styleUrls: ["./cadastro.css"],
  standalone: true,
})
export class Cadastro {
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

  constructor(private router: Router, private consultaCEPService: ConsultaCepService) {}

  consultarCEP(evento: FocusEvent): Subscription {
    const target = evento.target as HTMLInputElement;
    const cepNoFormulario = target.value;

    return this.consultaCEPService.getConsultaCEP(cepNoFormulario).subscribe((resultado) => {
      if (resultado) {
        console.log(resultado);
      }
    });
  }

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
