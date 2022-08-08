const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");

//middleware
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

const apiRouter = require("./routes/api/items");
app.use("/api/items", apiRouter);

const port = 3001;

app.listen(port, () => console.log(`Server running on port ${port}`));
