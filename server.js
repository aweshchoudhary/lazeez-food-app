const express = require("express");
const path = require("path/posix");
const app = express();
const port = process.env.PORT || 80;
const pageRoute = require("./routes/app");
const layouts = require("express-ejs-layouts");

app.use(express.static(path.join(__dirname, "/public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(layouts);
app.use(pageRoute);

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
