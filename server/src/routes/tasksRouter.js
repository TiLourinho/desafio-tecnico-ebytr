const tasksRouter = require('express').Router();
const rescue = require('express-rescue');

const TaskController = require('../controllers/TaskController');

tasksRouter.post('/', rescue(TaskController.create));
tasksRouter.get('/', rescue(TaskController.getAll));

module.exports = tasksRouter;