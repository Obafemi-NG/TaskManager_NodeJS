const Task = require("../models/task");
const asyncWrapper = require("../middlewares/asyncWrapper");
const { createCustomError } = require("../error/custom-error");

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
});

const addNewTask = asyncWrapper(async (req, res) => {
  const newTask = await Task.create(req.body);
  res.status(201).json({ newTask });
});

const getOneTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params;
  const task = await Task.findOne({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`Task not found with id : ${taskID} on db`, 404)
    );
  }
  res.status(200).json({ task });
});

const editOneTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!task) {
    return next(
      createCustomError(`Task with taskID : ${taskID} not found `, 404)
    );
  }
  res.status(200).json({ task });
});

const deleteOneTask = asyncWrapper(async (req, res) => {
  const { id: taskID } = req.params;
  const task = await Task.findOneAndDelete({ _id: taskID });
  if (!task) {
    return next(
      createCustomError(`Task with taskID : ${taskID} not found `, 404)
    );
  }
  res.status(200).json({ task });
});
module.exports = {
  getAllTasks,
  addNewTask,
  getOneTask,
  editOneTask,
  deleteOneTask,
};
