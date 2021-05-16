const TASKS = require('../../common/inMemoryDb');

const getAll = async () => {
  const tasks = TASKS.getAllTasks();

  return tasks;
};

const get = async (id) => {
  const task = TASKS.getTask(id);

  if (!task) {
    throw new Error(`The board with id: ${id} was not found`);
  }

  return task;
};

const save = async (task) => TASKS.createTask(task);

const update = async (id, task) => TASKS.updateTask(id, task);

const remove = async (id) => TASKS.removeTask(id);

module.exports = { getAll, get, save, update, remove };
