import request from "supertest";
import app from "../index";

describe("Route tests", () => {
  test("GET /scan with valid SKU should return success", async () => {
    const response = await request(app).get("/scan").query({ sku: "vga" });

    expect(response.status).toBe(200);
    expect(response.body).toEqual({
      success: true,
      data: {
        sku: "vga",
        name: "VGA Adapter",
        price: 30.0,
        currency: "USD",
      },
    });
  });

  test("GET /scan with invalid SKU should return failure", async () => {
    const response = await request(app).get("/scan").query({ sku: null });

    expect(response.status).toBe(400);
    expect(response.body).toEqual({
      success: false,
      message: "Invalid item SKU",
    });
  });
});
