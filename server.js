const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;
const routes = require("./routes");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());

routes(app);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});