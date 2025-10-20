import { Directive, forwardRef } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable, of } from "rxjs";
import { map, catchError } from "rxjs/operators";

import { ConsultaCEPService } from "../services/consulta-cep-service";

@Directive({
  selector: "[validadorCEP]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: forwardRef(() => ValidarCEP),
      multi: true,
    },
  ],
})
export class ValidarCEP implements AsyncValidator {
  constructor(private consultaCEPService: ConsultaCEPService) {}

  validate(controle: AbstractControl<any, any>): Observable<ValidationErrors | null> {
    const cep = controle.value;

    if (!cep) {
      // If empty, don’t trigger API call, just return valid
      return of(null);
    }

    return this.consultaCEPService.getConsultaCEP(cep).pipe(
      map((resultado: any) => null),
      catchError((erro) => {
        return of({ validadorCEP: true });
      })
    );
  }
}
