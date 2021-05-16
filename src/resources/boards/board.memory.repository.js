const BOARDS = require('../../common/inMemoryDb');

const getAll = async () => {
  const boards = BOARDS.getAllBoards();

  return boards;
};

const get = async (id) => {
  const board = BOARDS.getBoard(id);

  if (!board) {
    throw new Error(`The board with id: ${id} was not found`);
  }

  return board;
};

const save = async (board) => BOARDS.createBoard(board);

const update = async (id, board) => BOARDS.updateBoard(id, board);

const remove = async (id) => BOARDS.removeBoard(id);

module.exports = { getAll, get, save, update, remove };
