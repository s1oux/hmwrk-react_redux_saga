const MessageRepository = require('../../data/repositories/messageRepository');
const Message = require('../../data/models/message');

const messageRepository = new MessageRepository(Message);

const getMessages = async () => {
  try {
    return await messageRepository.getMessages();
  } catch (err) {
    return err;
  }
};

const getMessageById = async (id) => {
  try {
    return await messageRepository.getMessageById(id);
  } catch (err) {
    return err;
  }
};

const addMessage = async (message) => {
  try {
    return await messageRepository.addMessage(message);
  } catch (err) {
    return err;
  }
};

const editMessage = async (message) => {
  try {
    return await messageRepository.editMessage(message);
  } catch (err) {
    return err;
  }
};

const toggleLikeMessage = async ({ userId, messageId }) => {
  try {
    const message = await messageRepository.getMessageById(messageId);
    if (message.likes.includes(userId)) {
      message.likes = message.likes.filter((id) => id != userId);
    } else {
      message.likes.push(userId);
    }
    return await messageRepository.updateMessageLikes(message);
  } catch (err) {
    return err;
  }
};

const deleteMessage = async (id) => {
  try {
    return await messageRepository.deleteMessage(id);
  } catch (err) {
    return err;
  }
};

exports.getMessages = getMessages;
exports.addMessage = addMessage;
exports.getMessageById = getMessageById;
exports.editMessage = editMessage;
exports.deleteMessage = deleteMessage;
exports.toggleLikeMessage = toggleLikeMessage;
