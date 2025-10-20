import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";
// import { Cadastro } from "./pages/cadastro/cadastro";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
  imports: [RouterOutlet, Header, Footer],
  standalone: true,
})
export class App {
  title = "forms-reativos";
}
