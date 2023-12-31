import express from "express";
import cors from "cors";

import ScanController from "./src/controllers/scan-controller";

const app = express();
const port = 3000;
const scanController = new ScanController();

app.use(cors());
app.get("/scan", scanController.scanItem.bind(scanController));

app.listen(port, () => {
  console.log(`server running at http://localhost:${port}`);
});

export default app;
