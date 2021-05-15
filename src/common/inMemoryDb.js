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

const updateUser = async (id, user) => {
  const { name, login, password } = user;
  let currentUser = null;
  let updatedUser = null;

  DB.forEach((el) => {
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
  DB.filter((el) => el.id === id);
};

module.exports = { getAllUsers, getUser, createUser, updateUser, removeUser };
