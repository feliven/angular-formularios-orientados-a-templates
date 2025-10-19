import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-header",
  templateUrl: "./header.html",
  styleUrls: ["./header.css"],
})
export class Header implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  telaCadastro() {
    this.router.navigate(["cadastro"]);
  }
}
