const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = (id) => boardsRepo.get(id);

const save = (board) => boardsRepo.save(board);

const update = (id, user) => boardsRepo.update(id, user);

const remove = (id) => boardsRepo.remove(id);

module.exports = { getAll, get, save, update, remove };
