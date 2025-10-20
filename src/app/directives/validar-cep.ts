import { Directive } from "@angular/core";
import { AbstractControl, AsyncValidator, NG_ASYNC_VALIDATORS, ValidationErrors } from "@angular/forms";
import { Observable } from "rxjs";
import { tap, map } from "rxjs/operators";

import { ConsultaCEPService } from "../services/consulta-cep-service";

@Directive({
  selector: "[validadorCEP]",
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: ValidarCEP,
      multi: true,
    },
  ],
})
export class ValidarCEP implements AsyncValidator {
  constructor(private consultaCEPService: ConsultaCEPService) {}

  validate(
    controle: AbstractControl<any, any>
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const cep = controle.value;
    return this.consultaCEPService
      .getConsultaCEP(cep)
      .pipe(map((resultado: any) => (resultado.erro ? { validadorCEP: true } : null)));
  }
}
