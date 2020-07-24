export const countUsersInChat = (messages) =>
  new Set(messages.map((message) => message.user)).size;

export const isCurrentUserMessage = (user, message) =>
  user._id === message.userId;
