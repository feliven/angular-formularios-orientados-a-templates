import { Component, Input } from "@angular/core";

@Component({
  selector: "app-mensagem-erro",
  imports: [],
  templateUrl: "./mensagem-erro.html",
  styleUrl: "./mensagem-erro.css",
})
export class MensagemErro {
  @Input() mensagemErro = "";
  @Input() tipo: "required" | "minlength" | "pattern" | "email" | "telefone" = "required";

  getMensagem(): string {
    const mensagensErro = {
      required: "Este campo deve ser preenchido.",
      minlength: "Este campo não atende ao tamanho mínimo exigido.",
      pattern: "O formato inserido é inválido.",
      email: "O campo de email deve seguir este padrão: exemplo@dominio.com.",
      telefone: "O campo de telefone deve seguir este padrão: XX XXXXX-XXXX.",
    };

    return this.mensagemErro || mensagensErro[this.tipo];
  }
}
