import { ValidarCEP } from "./validar-cep";
import { ConsultaCEPService } from "../services/consulta-cep-service";

describe("validadorCEP", () => {
  it("should create an instance", () => {
    const mockCEPService = jasmine.createSpyObj("ConsultaCEPService", ["getConsultaCEP"]);

    const directive = new ValidarCEP(mockCEPService);
    expect(directive).toBeTruthy();
  });
});
