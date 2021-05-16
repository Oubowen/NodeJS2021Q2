const Board = require('../resources/boards/board.model');
const User = require('../resources/users/user.model');

const USERS = [];
const BOARDS = [];

USERS.push(new User(), new User(), new User());
BOARDS.push(new Board(), new Board(), new Board());

const getAllUsers = async () => USERS.slice();

const getUser = async (id) => USERS.filter((el) => el.id === id)[0];

const createUser = async (user) => {
  USERS.push(user);
  return USERS.slice()[USERS.length - 1];
};

const updateUser = async (id, user) => {
  const { name, login, password } = user;
  let currentUser;
  let updatedUser;

  USERS.forEach((el) => {
    if (el.id === id) {
      currentUser = el;
      currentUser.name = name;
      currentUser.login = login;
      currentUser.password = password;
      updatedUser = currentUser;
    }
  });
  return updatedUser;
};

const removeUser = async (id) => {
  let index = null;

  USERS.forEach((el) => {
    if (el.id === id) {
      index = USERS.indexOf(el);
    }
  });

  USERS.splice(index, 1);
  return USERS;
};

const getAllBoards = async () => BOARDS.slice();

const getBoard = async (id) => BOARDS.filter((el) => el.id === id)[0];

const createBoard = async (board) => {
  BOARDS.push(board);
  return BOARDS.slice()[BOARDS.length - 1];
};

const updateBoard = async (id, board) => {
  const {
    title,
    columns: [{ title: columnTitle }],
  } = board;
  let currentBoard;
  let updatedBoard;

  BOARDS.forEach((el) => {
    if (el.id === id) {
      currentBoard = el;
      currentBoard.title = title;
      currentBoard.columns.title = columnTitle;
      updatedBoard = currentBoard;
    }
  });
  return updatedBoard;
};

const removeBoard = async (id) => {
  let index = null;

  BOARDS.forEach((el) => {
    if (el.id === id) {
      index = BOARDS.indexOf(el);
    }
  });

  BOARDS.splice(index, 1);
  return BOARDS.slice();
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  removeUser,
  getAllBoards,
  getBoard,
  createBoard,
  updateBoard,
  removeBoard,
};
