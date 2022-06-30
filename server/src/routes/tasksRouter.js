const tasksRouter = require('express').Router();
const rescue = require('express-rescue');

const TaskController = require('../controllers/TaskController');

tasksRouter.post('/', rescue(TaskController.create));
tasksRouter.get('/', rescue(TaskController.getAll));
tasksRouter.delete('/:id', rescue(TaskController.remove));
tasksRouter.put('/text/:id', rescue(TaskController.updateText));
tasksRouter.put('/type/:id', rescue(TaskController.updateType))

module.exports = tasksRouter;