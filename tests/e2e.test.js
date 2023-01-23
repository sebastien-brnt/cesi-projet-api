const request = require("supertest");
const app = require("../app");

describe("Test the root path", () => {
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
  });
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/");
    expect(response.text).toBe("Hello world !");
  });
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/api/contacts");
    expect(response.statusCode).toBe(200);
  });
  test("It should respond to the GET method", async () => {
    const response = await request(app).get("/api/contacts");
    expect(response._body[0].prenom).toBe("Sébastien");
  });
});
