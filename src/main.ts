import { enableProdMode } from "@angular/core";
// import { platformBrowser } from "@angular/platform-browser";
// import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import { bootstrapApplication } from "@angular/platform-browser";
import { provideRouter } from "@angular/router";
import { App } from "./app/app";
import { routes } from "./app/app-routing.module";

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(App, {
  providers: [
    provideRouter([
      // Your routes here
    ]),
  ],
});

// import { enableProdMode } from '@angular/core';
// import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// import { AppModule } from './app/app.module';
// import { environment } from './environments/environment';

// if (environment.production) {
//   enableProdMode();
// }

// platformBrowserDynamic().bootstrapModule(AppModule)
//   .catch(err => console.error(err));
