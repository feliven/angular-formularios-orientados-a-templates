import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError, map } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConsultaCEPService {
  enderecoAPI = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) {}

  getConsultaCEP(cep: string): Observable<unknown> {
    const enderecoAPIComCEP = `${this.enderecoAPI}${cep}/json`;

    return this.http.get(enderecoAPIComCEP).pipe(
      map((resposta: any) => {
        if (resposta.erro === "true") {
          throw new Error("CEP não encontrado.");
        }
        return resposta;
      }),
      catchError((mensagemDeErro) => {
        if (mensagemDeErro instanceof HttpErrorResponse) {
          return throwError(() => new Error("O formato do CEP é inválido."));
        }
        return throwError(() => mensagemDeErro);
      })
    );
  }
}
