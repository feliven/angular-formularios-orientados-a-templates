import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { Header } from "./components/header/header";
import { Footer } from "./components/footer/footer";

@Component({
  selector: "app-root",
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
  imports: [Header, RouterOutlet, Footer],
})
export class App {
  title = "forms-reativos";
}
