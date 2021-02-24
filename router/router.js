const express = require("express");
const { getAll, getID, posting } = require("../controller/controller");

const router = express.Router();

router.get("/games", getAll);

router.post("/games", posting);
router.get("/games/:id", getID);

module.exports = router;
