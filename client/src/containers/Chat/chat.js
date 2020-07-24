import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../../components/Spinner/spinner';
import ChatHeader from '../../components/ChatHeader/chatHeader';
import MessageList from '../../components/MessageList/messageList';
import MessageForm from '../../components/MessageForm/messageForm';

import {
  getMessages,
  addMessage,
  deleteMessage,
  editMessage,
  toggleLikeMessage,
  setEditMessageAction,
} from '../../actions/messageActions';

import { getUsersCount } from '../../actions/userActions';

import './chat.css';

const Chat = ({
  currentUser,
  usersCount,
  isLoading,
  messages,
  lastMessageDate,
  getMessages,
  addMessage,
  toggleLikeMessage,
  deleteMessage,
  setEditMessageAction,
  getUsersCount,
  history,
}) => {
  useEffect(() => {
    getMessages();
    getUsersCount();
  }, []);

  return (
    <div className="page">
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="container">
          <ChatHeader
            name="ch4tik"
            userCount={usersCount}
            messageCount={messages.length}
            lastMessageTime={lastMessageDate}
          />
          <MessageList
            user={currentUser}
            messages={messages}
            removeMessage={deleteMessage}
            openEdit={setEditMessageAction}
            likeMessage={toggleLikeMessage}
          />
          <MessageForm user={currentUser} addMessage={addMessage} />
        </div>
      )}
    </div>
  );
};

Chat.defaultProps = {
  messages: [],
  messageOnEdit: undefined,
  isLoading: true,
};

const mapStateToProps = (rootState) => ({
  currentUser: rootState.user.authenticatedUser,
  usersCount: rootState.user.usersInChat,
  isLoading: rootState.messages.loading,
  messages: rootState.messages.messages,
  lastMessageDate: rootState.messages.lastMessageDate,
  messageOnEdit: rootState.messages.messageOnEdit,
});

const actions = {
  getMessages,
  addMessage,
  deleteMessage,
  editMessage,
  toggleLikeMessage,
  setEditMessageAction,
  getUsersCount,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
