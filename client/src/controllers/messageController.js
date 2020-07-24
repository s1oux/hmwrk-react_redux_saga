const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MS_IN_SECOND = 1000;
const DAY_IN_MS =
  MS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR * HOURS_IN_DAY;

export const convertDatePropToDateType = (message) => ({
  ...message,
  createdAt: new Date(message.createdAt),
});

export const processMessagesInitData = (messages) => {
  return messages.map((message) => convertDatePropToDateType(message));
};

const checkIfYesterday = (date) => {
  let propYesterday = new Date();
  propYesterday.setDate(propYesterday.getDate() - 1);
  return Math.floor((date - propYesterday) / DAY_IN_MS) === 1;
};

export const groupMessagesByDate = (messages) => {
  const groups = messages.reduce((groups, message) => {
    const messageDate = message.createdAt;
    const date = checkIfYesterday(messageDate)
      ? 'Yesterday'
      : messageDate.toLocaleDateString();
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(message);
    return groups;
  }, {});

  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      messages: groups[date],
    };
  });
  return groupArrays;
};

export const isLikedByUser = (message, user) => {
  return message.likes.some((userId) => isLikeFound(userId, user._id));
};

export const removeUserLike = (message, user) => {
  return message.likes.filter((userId) => !isLikeFound(userId, user._id));
};

export const isLikeFound = (userId, idInLikes) => {
  return userId === idInLikes;
};
