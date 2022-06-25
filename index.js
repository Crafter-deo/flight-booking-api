const express = require("express")
const { json } = require("express")
const routes = require("./routes/flightRoute")

const app = express();

app.use(json());

app.use("/", routes)

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
