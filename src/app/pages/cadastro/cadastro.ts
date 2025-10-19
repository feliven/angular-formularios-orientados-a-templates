import { Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-cadastro",
  templateUrl: "./cadastro.html",
  imports: [FormsModule],
  styleUrls: ["./cadastro.css"],
})
export class Cadastro implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  cadastrar() {
    console.log("Formulário enviado");
  }
}
