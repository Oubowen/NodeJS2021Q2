const User = require('../resources/users/user.model');

const DB = [];

DB.push(new User(), new User(), new User());

const getAllUsers = async () => DB.slice();

const getUser = async (id) => {
  const user = DB.filter((el) => el.id === id)[0];

  return user;
};

const createUser = async (user) => {
  DB.push(user);
  return user;
};

module.exports = { getAllUsers, getUser, createUser };
