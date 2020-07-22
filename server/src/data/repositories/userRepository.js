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

  async addUser({ name, password }) {
    const user = await this.getUserByName(name);
    if (user) {
      return { error: 'User with such name already exists' };
    }

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new this.model({
      name: name,
      password: hash,
    });
    return await newUser.save();
  }

  async editUser(user) {
    const updatedUser = await this.model.findByIdAndUpdate(
      user._id,
      { $set: {name: user.name}},
      {new: true}
    );
    return updatedUser;
  }

  async deleteUser(id) {
    const removedUser = await this.model.findByIdAndDelete(id);
    return removedUser;
  }
}

// const getUsers = async () => {
//   try {
//     return await User.find().sort({ createdAt: 1 });
//   } catch (err) {
//     return err;
//   }
// };

// const addUser = async ({ name, password }) => {
//   const user = await User.findOne({ name });
//   if (user) {
//     return { error: 'User with such name already exists' };
//   }
//   console.log(`${name} - ${password}`);
//   console.log(user);

//   const newUser = new User({
//     name: name,
//     password: password,
//   });

//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(newUser.password, salt, async (err, hash) => {
//       if (err) throw err;
//       newUser.password = hash;
//       return await newUser.save();
//     });
//   });
// };

// exports.getUsers = getUsers;
// exports.addUser = addUser;

module.exports = UserRepository;
