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

// const save = async (user) => DB.createUser(user);

// const update = async (id, user) => DB.updateUser(id, user);

// const remove = async (id) => DB.removeUser(id);

module.exports = { getAll, get };
