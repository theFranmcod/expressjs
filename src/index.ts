import bodyParser from "body-parser";
import express from "express";
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.raw({ type: "application/vnd.custom-type" }));
app.use(bodyParser.text({ type: "text/html" }));

app.get("/", async (req, res) => {
  res.json({ Hello: "World" });
});

app.get("/test", async (req, res) => {
  res.set('Cache-control', 'public, max-age=120')
  setTimeout(() => {
    res.json({ cahed: true });
  }, 5 * 1000);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
