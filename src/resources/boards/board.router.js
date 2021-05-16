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
  const boards = await boardsService.save(
    new Board({
      title: req.body.title,
      columns: [
        {
          title: req.body.title,
          order: req.body.order,
        },
      ],
    })
  );
  res.status(201).json(boards);
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, {
    title: req.body.title,
    columns: [
      {
        title: req.body.title,
        order: req.body.order,
      },
    ],
  });
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  const boards = await boardsService.remove(req.params.id);
  res.json(boards);
});

module.exports = router;
