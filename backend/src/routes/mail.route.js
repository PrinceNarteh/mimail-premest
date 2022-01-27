const { Router } = require("express");
const router = Router();
const { send, deliver, sync } = require("../controllers/mail.control");

router.post("/", sync);
router.post("/send", send);
router.post("/deliver", deliver);

module.exports = router;
