const request = require("supertest");
const app = require("./app");

describe("Test the root path", () => {
    it("should redirect to /permutation-index/", done => {
        request(app)
            .get("/")
            .then(response => {
                expect(response.statusCode).toBe(302);
                done();
            });
    });
    it("it should successfully go to /permutation-index", done => {
        request(app)
            .get("/permutation-index/")
            .then(response => {
                expect(response.statusCode).toBe(200);
                done();
            });
    });
});
