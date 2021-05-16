const router = require('express').Router();
const tasksService = require('./tasks.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(tasks);
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.id);
  res.status(200).send(task);
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.remove(req.params.id);
  res.sendStatus(200);
});

router.route('/:id').post(async (req, res) => {
  const task = await tasksService.save(req.body);
  res.status(200).send(task);
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(req.params.id, req.body);
  res.status(200).send(task);
});

module.exports = router;
