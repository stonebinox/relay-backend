export const items = [
  {
    sku: "ipd",
    name: "Super iPad",
    price: 549.99,
    currency: "USD",
    discountRules: {
      type: "price",
      minQty: 4,
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
      minQty: 0,
      items: [
        {
          itemSku: "vga",
          itemQty: 1,
          price: 0.0,
          parent: "mbp", // to track if deleting the parent item
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
      minQty: 2,
    },
  },
  {
    sku: "vga",
    name: "VGA Adapter",
    price: 30.0,
    currency: "USD",
  },
];
