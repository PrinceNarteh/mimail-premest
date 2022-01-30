const { Router } = require("express");
const router = Router();
const { send, deliver, sync } = require("../controllers/mail.control");
const { authRequired } = require("../middlewares/auth.middleware");

router.post("/", authRequired, sync);
router.post("/send", authRequired, send);
router.post("/deliver", authRequired, deliver);

module.exports = router;
