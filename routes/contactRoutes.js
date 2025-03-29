const express = require("express");
const router = express.Router();
const {
  getContact,
  createContact,
  getContacts,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");
// router.route("/").get((req, res) => {
//   res.status(200).json({ message: "Get all contacts." });
// }); this is basically the same thing but i prefer the method below
router.use(validateToken);
router
  .route("/")
  .get(getContacts) // GET all contacts
  .post(createContact); // POST a new contact

router
  .route("/:id")
  .get(getContact) // GET a single contact by ID
  .put(updateContact) // UPDATE a contact by ID
  .delete(deleteContact); // DELETE a contact by ID

module.exports = router;
