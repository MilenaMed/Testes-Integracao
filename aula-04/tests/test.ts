import app from "index";
import supertest from "supertest";
describe("GET /health", () => {
    it("retorna status 200", async () => {
        const tryTest = await supertest(app).get("/health");
        expect(tryTest.status).toEqual(200);
    })
})