import { createRequest, createResponse } from "node-mocks-http";
import ScanController from "../../src/controllers/scan-controller";

describe("ScanController", () => {
  let scanController;

  beforeEach(() => {
    scanController = new ScanController();
  });

  describe("scanItem", () => {
    it("should respond with status 200 and item", () => {
      const mockItem = {
        sku: "mbp",
        name: "MacBook Pro",
        price: 1399.99,
        currency: "USD",
        discountRules: {
          type: "item",
          minQty: 1,
          items: [
            {
              itemSku: "vga",
              itemQty: 1,
            },
          ],
        },
      };
      const request = createRequest({
        query: {
          sku: "mbp",
        },
      });
      const response = createResponse({
        success: true,
        data: mockItem,
      });
      scanController.scanItem(request, response);

      expect(response.statusCode).toBe(200);
      expect(response._getData()).toEqual({
        success: true,
        data: mockItem,
      });
    });

    it("should respond with status 400 and display error", () => {
      const request = createRequest({
        query: {
          sku: "vgb",
        },
      });

      const response = createResponse({
        success: false,
        message: "Invalid item SKU",
      });

      scanController.scanItem(request, response);

      expect(response.statusCode).toBe(400);
      expect(response._getData()).toEqual({
        message: "Invalid item SKU",
        success: false,
      });
    });
  });

  describe("validateSku", () => {
    it("should respond with true when sku is valid", () => {
      const response = scanController.validateSku("mbp");

      expect(response).toEqual(true);
    });

    it("should respond with false when sku is invalid", () => {
      const response = scanController.validateSku("vgb");

      expect(response).toEqual(false);
    });
  });
});
