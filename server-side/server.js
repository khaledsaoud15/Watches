const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./controllers/routes/auth");
const productRoute = require("./controllers/routes/productRoute");
const cors = require("cors");

dotenv.config();
app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("db is running"))
  .catch((err) => console.log(err));

app.use("/api/", authRoute);
app.use("/api/", productRoute);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on port http://localhost:${port}`);
});
