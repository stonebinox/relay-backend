# Relay Backend

Simple repository storing basic routes and setup for an express application. To get started:

- Clone the repository
- `cd` into the project dir
- Run `npm install`. This should setup the dependencies
- Once it's done, run `npm start` and this should get the BE running on port 3000

Running tests is as easy as running `npm test`.

## Changing pricing and discount info

In `data/items.js`, I've included a simple data store of what items exist. The `discoutRules` can be tweaked and added here. Currently, the application recognises only 3 values for `type`: "price", "qty", and "item". All types expect a `minQty` property. The next few properties change depending on the discountRule type.
