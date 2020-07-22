const bcrypt = require('bcryptjs');

const UserRepository = require('../../data/repositories/userRepository');
const User = require('../../data/models/user');

const userRepository = new UserRepository(User);

const getUsers = async () => {
  try {
    return await userRepository.getUsers();
  } catch (err) {
    return err;
  }
};

const getUserById = async (id) => {
  try {
    return await userRepository.getUserById(id);
  } catch (err) {
    return err;
  }
}

const addUser = async ({ name, password }) => {
  try {
    return await userRepository.addUser({ name, password });
  } catch (err) {
    return err;
  }
};

const editUser = async (user) => {
  try {
    return await userRepository.editUser(user);
  } catch (err) {
    return err;
  }
};

const deleteUser = async (id) => {
  try {
    return await userRepository.deleteUser(id);
  } catch(err) {
    return err;
  }
};

exports.getUsers = getUsers;
exports.addUser = addUser;
exports.getUserById = getUserById;
exports.editUser = editUser;
exports.deleteUser = deleteUser;
