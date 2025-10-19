import { Directive } from "@angular/core";
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from "@angular/forms";

@Directive({
  selector: "[appMaiorDeIdade]",
  standalone: true,
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: MaiorDeIdade,
      multi: true,
    },
  ],
})
export class MaiorDeIdade implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const dataNascimento = control.value;
    const anoNascimento = new Date(dataNascimento).getFullYear();
    const anoNascMais18 = anoNascimento + 18;

    const anoAtual = new Date().getFullYear();

    const eMaior = anoNascMais18 <= anoAtual;

    return eMaior ? null : { maiorDeIdadeValidator: true };
  }
}
