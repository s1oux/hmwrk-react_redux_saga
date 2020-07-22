const bcrypt = require('bcryptjs');

const UserRepository = require('../../data/repositories/userRepository');
const User = require('../../data/models/user');

const userRepository = new UserRepository(User);

const login = async ({name, password}) => {
  const user = await userRepository.getUserByName(name);
  if(!user) {
    return { error: "Incorrect username or password" };
  }
  const isMatch = bcrypt.compareSync(password, user.password);
  if(isMatch) {
    return user;
  } else {
    return { error: "Incorrect username or password" };
  }
}

exports.login = login;
