class MessageRepository {
  constructor(model) {
    this.model = model;
  }

  async getMessages() {
    return await this.model.find().sort({ createdAt: 1 });
  }

  async getMessageById(id) {
    return await this.model.findById(id);
  }

  async addMessage({ userId, user, text }) {
    const newMessage = new this.model({
      userId: userId,
      user: user,
      text: text,
    });

    return await newMessage.save();
  }

  async editMessage(message) {
    const updatedMessage = await this.model.findByIdAndUpdate(
      message._id,
      { $set: { text: message.text } },
      { new: true }
    );
    return updatedMessage;
  }

  async updateMessageLikes(message) {
    const updatedMessage = await this.model.findByIdAndUpdate(
      message._id,
      { $set: { likes: message.likes } },
      { new: true }
    );
    return updatedMessage;
  }

  async deleteMessage(id) {
    const removedMessage = await this.model.findByIdAndDelete(id);
    return removedMessage;
  }
}

module.exports = MessageRepository;
