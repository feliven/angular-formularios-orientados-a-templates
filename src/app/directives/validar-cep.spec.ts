import { ValidarCEP } from "./validar-cep";

describe("validadorCEP", () => {
  it("should create an instance", () => {
    const mockCEPService = jasmine.createSpyObj("ConsultaCEPService", ["getConsultaCEP"]);

    const directive = new ValidarCEP(mockCEPService);
    expect(directive).toBeTruthy();
  });
});
