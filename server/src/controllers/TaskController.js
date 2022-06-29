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

const remove = async (req, res) => {
  const { id } = req.params;
  const task = await TaskService.remove(id);

  return res.status(204).end();
}

module.exports = {
  create,
  getAll,
  remove,
}