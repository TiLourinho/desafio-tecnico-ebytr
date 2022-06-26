const TaskModel = require('../models/TaskModel');

const create = async (text) => {
  const task = await TaskModel.create(text);

  return task;
}

module.exports = {
  create,
}