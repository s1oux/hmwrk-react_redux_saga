const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const messageSchema = new Schema({
  userId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  avatar: {
    type: String,
    default:
      'https://forwardsummit.ca/wp-content/uploads/2019/01/avatar-default.png',
  },
  user: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    default: []
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Message = mongoose.model('messages', messageSchema);
