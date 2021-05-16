const USERS = require('../../common/inMemoryDb');

const getAll = async () => USERS.getAllUsers();

const get = async (id) => {
  const user = USERS.getUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};

const save = async (user) => USERS.createUser(user);

const update = async (id, user) => USERS.updateUser(id, user);

const remove = async (id) => USERS.removeUser(id);

module.exports = { getAll, get, save, update, remove };
