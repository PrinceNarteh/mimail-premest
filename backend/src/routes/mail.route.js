const { Router } = require("express");
const router = Router();
const {
  send,
  deliver,
  sync,
  getMails,
  toggleStarred,
} = require("../controllers/mail.control");
const { authRequired } = require("../middlewares/auth.middleware");

router.post("/", authRequired, sync);
router.post("/send", authRequired, send);
router.post("/deliver", authRequired, deliver);
router.post("/get-mails", authRequired, getMails);
router.post("/starred/:mailId", authRequired, toggleStarred);

module.exports = router;
