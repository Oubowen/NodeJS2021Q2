const DB = require('../../common/inMemoryDb');

const getAll = async () => DB.getAllUsers();

const get = async (id) => {
  const user = DB.getUser(id);

  if (!user) {
    throw new Error(`The user with id: ${id} was not found`);
  }

  return user;
};

const save = async (user) => DB.createUser(user);

const remove = async (id) => DB.removeUser(id);

module.exports = { getAll, get, save, remove };

// const TABLE_NAME = 'Users';

// const get = async (id) => {
//   const user = await DB.getEntity(TABLE_NAME, id);

//   if (!user) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
//   }

//   return user;
// };

// const remove = async (id) => {
//   if (!(await DB.removeEntity(TABLE_NAME, id))) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
//   }
// };

// const save = async (user) => DB.saveEntity(TABLE_NAME, user);

// const update = async (id, user) => {
//   const entity = await DB.updateEntity(TABLE_NAME, id, user);
//   if (!entity) {
//     throw new NOT_FOUND_ERROR(`Couldn't find a user with id: ${id}`);
//   }
// };
