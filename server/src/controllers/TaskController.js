const TaskService = require('../services/TaskService');

const create = async (req, res) => {
  const { text } = req.body;
  const task = await TaskService.create(text);

  return res.status(201).json(task);
}

const getAll = async (_req, res) => {
  const tasks = await TaskService.getAll();

  return res.status(200).json(tasks);
}

module.exports = {
  create,
  getAll,
}