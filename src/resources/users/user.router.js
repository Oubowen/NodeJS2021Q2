const router = require('express').Router();
const User = require('./user.model');
const usersService = require('./user.service');

router.route('/').get(async (req, res) => {
  const users = await usersService.getAll();
  // map user fields to exclude secret fields like "password"
  res.json(users.map(User.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const user = await usersService.get(req.params.id);
  res.json(User.toResponse(user));
  res.sendStatus(201);
});

router.route('/').post(async (req, res) => {
  const user = await usersService.save(
    new User({
      name: req.body.name,
      login: req.body.login,
      password: req.body.password,
    })
  );
  res.status(user ? 201 : 400).json(User.toResponse(user));
});

router.route('/:id').put(async (req, res) => {
  const user = await usersService.update(req.params.id, {
    name: req.body.name,
    login: req.body.login,
    password: req.body.password,
  });
  res.json(User.toResponse(user));
});

router.route('/:id').delete(async (req, res) => {
  const users = await usersService.remove(req.params.id);
  res.json(users.map(User.toResponse));
});

module.exports = router;
