const express = require("express");
const app = express();
const router = express.Router();
app.use(express.urlencoded({ extended: true }));
const cors = require("cors");
const { getItems, getItemsById } = require("../../controllers/Items");

router.get("/", cors(), getItems);
router.get("/:id", cors(), getItemsById);

module.exports = router;
