import { items } from "../../data/items";

export default class ScanController {
  /**
   * Validates and adds an item to cart
   *
   * @param {object} req Request object
   * @param {object} res Response object
   * @returns {object}
   */
  scanItem(req, res) {
    const {
      query: { sku = null },
    } = req;

    if (!this.validateSku(sku)) {
      return res.status(400).send({
        success: false,
        message: "Invalid item SKU",
      });
    }

    const target = items.find((item) => item.sku === sku);

    return res.status(200).send({
      success: true,
      data: target,
    });
  }

  /**
   * Validates a scanned item's SKU against our DB
   *
   * @param {string} sku The item SKU
   * @returns {boolean}
   */
  validateSku(sku) {
    if (!sku) return false;

    return items.some((item) => item.sku === sku);
  }
}
