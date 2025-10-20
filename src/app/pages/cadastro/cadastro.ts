import { Router } from "@angular/router";
import { Component, ViewChild } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, NgForm } from "@angular/forms";
import { Observable, Subscription } from "rxjs";

import { InterfaceCadastro } from "../../interfaces/interface-cadastro";
import { MensagemErro } from "../../components/mensagem-erro/mensagem-erro";
import { MaiorDeIdade } from "../../directives/maior-de-idade";
import { ConsultaCEPService } from "../../services/consulta-cep-service";

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

  constructor(private router: Router, private consultaCEPService: ConsultaCEPService) {}

  consultarCEP(evento: FocusEvent): Subscription {
    const target = evento.target as HTMLInputElement;
    const cepNoFormulario = target.value;

    return this.consultaCEPService.getConsultaCEP(cepNoFormulario).subscribe((resultado) => {
      if (resultado) {
        console.log(resultado);
        this.popularEndereco(resultado, this.formularioPreenchido);
      }
    });
  }

  popularEndereco(dados: any, formulario: NgForm) {
    formulario.form.patchValue({
      endereco: dados.logradouro,
      numero: dados.complemento, // é assim que a API funciona...
      bairro: dados.bairro,
      cidade: dados.localidade,
      estado: dados.uf,
    });
  }

  cadastrarFormulario(): void {
    console.log(this.formularioASerEnviado);
    console.log(this.formularioPreenchido);
    if (this.formularioPreenchido.valid) {
      console.log("Formulário enviado");
      this.router.navigate(["sucesso"]);
    } else {
      console.log("Formulário inválido");
    }
  }
}
