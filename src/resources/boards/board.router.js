const router = require('express').Router();
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  res.json(board);
});

// router.route('/').post(async (req, res) => {
//   const user = await boardsService.save(
//     new Board({
//       name: req.body.name,
//       login: req.body.login,
//       password: req.body.password,
//     })
//   );
//   res.json(Board.toResponse(user));
// });

// router.route('/:id').put(async (req, res) => {
//   const user = await boardsService.update(req.params.id, {
//     name: req.body.name,
//     login: req.body.login,
//     password: req.body.password,
//   });
//   res.json(Board.toResponse(user));
// });

// router.route('/:id').delete(async (req, res) => {
//   await boardsService.remove(req.params.id);
//   const users = await boardsService.getAll();
//   res.json(users.map(Board.toResponse));
// });

module.exports = router;
