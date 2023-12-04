const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const database = require("./config/database");

// Routes Ver1
const routesVer1 = require("./api/v1/routes/index.route");

database.connect();

const app = express();
const port = process.env.PORT;

// const corsOptions = {
//   origin: "http://example.com"
// };
app.use(cors());

// parse application/json
app.use(bodyParser.json());

// Routes Ver1
routesVer1(app);

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});