import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.html",
  styleUrls: ["./cadastro.css"],
})
export class Cadastro implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cadastrar() {
    console.log("Formulário enviado");
  }
}
