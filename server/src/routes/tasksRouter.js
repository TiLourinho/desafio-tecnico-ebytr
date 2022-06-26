const tasksRouter = require('express').Router();
const rescue = require('express-rescue');

const TaskController = require('../controllers/TaskController');

tasksRouter.post('/', rescue(TaskController.create));

module.exports = tasksRouter;