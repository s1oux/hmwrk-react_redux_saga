const bcrypt = require('bcryptjs');

class UserRepository {
  constructor(model) {
    this.model = model;
  }

  async getUsers() {
    return await this.model.find();
  }

  async getUserByName(name) {
    return await this.model.findOne({ name });
  }

  async getUserById(id) {
    return await this.model.findById(id);
  }

  async addUser({ name, surname, password }) {
    const user = await this.getUserByName(name);
    if (user) {
      return { error: 'User with such name already exists' };
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new this.model({
      name: name,
      surname: surname,
      password: hash,
    });
    return await newUser.save();
  }

  async editUser(user) {
    const updatedUser = await this.model.findByIdAndUpdate(
      user._id,
      { $set: { name: user.name, surname: user.surname } },
      { new: true }
    );
    return updatedUser;
  }

  async deleteUser(id) {
    const removedUser = await this.model.findByIdAndDelete(id);
    return removedUser;
  }
}

module.exports = UserRepository;
