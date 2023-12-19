export const items = [
  {
    sku: "ipd",
    name: "Super iPad",
    price: 549.99,
    currency: "USD",
    discountRules: {
      type: "price",
      minQty: 5,
      discountPricePerItem: 499.99,
    },
  },
  {
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
  },
  {
    sku: "atv",
    name: "Apple TV",
    price: 109.5,
    currency: "USD",
    discountRules: {
      type: "qty",
      minQty: 3,
    },
  },
  {
    sku: "vga",
    name: "VGA Adapter",
    price: 30.0,
    currency: "USD",
  },
];
