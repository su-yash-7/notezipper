const express = require('express');
const { getNotes } = require('../controller/noteController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.route('/').get(protect, getNotes);
// router.route("/create").post(protect, CreateNote);
// router
//   .route("/:id")
//   .get(getNoteById)
//   .put(protect, UpdateNote)
//   .delete(protect, DeleteNote);

module.exports = router;
