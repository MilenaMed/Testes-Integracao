import calculator from "calculator";

describe("sum", () => {
    it("returns 3 for 2 and 1 params", () => {
        const resultado = calculator.sum(2, 1);   
        expect(resultado).toEqual(3);
    });
  
});
describe("sub", () => {
    it("returns 1 for 2 and 1 params", () => {
        const resultado = calculator.sub(2, 1);   
        expect(resultado).toEqual(1);
    });
  
});
describe("mul", () => {
    it("returns 3 for 3 and 1 params", () => {
        const resultado = calculator.mul(3, 1);   
        expect(resultado).toEqual(3);
    });
  
});
describe("div", () => {
    it("returns 3 for 6 and 2 params", () => {
        const resultado = calculator.div(6, 2);   
        expect(resultado).toEqual(3);
    });
  
});