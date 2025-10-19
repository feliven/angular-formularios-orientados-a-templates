import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormBuilder, FormGroup, FormsModule, Validators } from "@angular/forms";
import { InterfaceCadastro } from "../../interfaces/interface-cadastro";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.html",
  imports: [CommonModule, FormsModule],
  styleUrls: ["./cadastro.css"],
  standalone: true,
})
export class Cadastro implements OnInit {
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
    // if (this.formularioASerEnviado.valid) {
    console.log(this.formularioASerEnviado);
    console.log("Formulário enviado");
    this.router.navigate(["sucesso"]);
    // } else {
    //   console.log("Formulário inválido");
    // Object.keys(formularioASerEnviado.controls).forEach((key) => {
    //   const control = formularioASerEnviado.controls[key];
    //   if (control.invalid) {
    //     control.markAsTouched();
    //   }
    // });
  }
}
