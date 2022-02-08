const { Router } = require("express");
const router = Router();
const {
  send,
  deliver,
  sync,
  getMails,
  toggleStarred,
  deleteMail,
} = require("../controllers/mail.control");
const { authRequired } = require("../middleware/auth.middleware");

router.post("/", authRequired, sync);
router.post("/send", authRequired, send);
router.post("/deliver", authRequired, deliver);
router.delete("/:mailId", authRequired, deleteMail);
router.get("/get-mails", authRequired, getMails);
router.post("/starred/:mailId", authRequired, toggleStarred);

module.exports = router;
