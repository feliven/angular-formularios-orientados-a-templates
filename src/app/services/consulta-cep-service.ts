import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError, throwError } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ConsultaCEPService {
  enderecoAPI = "https://viacep.com.br/ws/";

  constructor(private http: HttpClient) {}

  getConsultaCEP(cep: string): Observable<unknown> {
    const enderecoAPIComCEP = `${this.enderecoAPI}${cep}/json`;

    // return this.http.get(enderecoAPIComCEP);

    return this.http.get(enderecoAPIComCEP).pipe(
      catchError((erro) => {
        if (erro.status === 404) {
          return throwError(() => new Error("CEP não encontrado"));
        }
        return throwError(() => new Error("Erro ao consultar CEP"));
      })
    );
  }
}
