const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  res.status(board ? 200 : 404).json(board);
});

router.route('/').post(async (req, res) => {
  const board = await boardsService.save(
    new Board({
      title: req.body.title,
      columns: [
        {
          title: req.body.title,
          order: 0,
        },
      ],
    })
  );
  res.json(board);
});

// router.route('/:id').put(async (req, res) => {
//   const user = await boardsService.update(req.params.id, {
//     name: req.body.name,
//     login: req.body.login,
//     password: req.body.password,
//   });
//   res.json(Board.toResponse(user));
// });

router.route('/:id').delete(async (req, res) => {
  const boards = await boardsService.remove(req.params.id);
  res.json(boards);
});

module.exports = router;
