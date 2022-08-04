const express = require("express");
const router = express.Router();
const {
  getAllTasks,
  addNewTask,
  getOneTask,
  editOneTask,
  deleteOneTask,
} = require("../controllers/task");

router.route("/").get(getAllTasks).post(addNewTask);
router.route("/:id").get(getOneTask).patch(editOneTask).delete(deleteOneTask);
module.exports = router;
