import React, { useState } from 'react';

import './messageForm.css';

const MessageForm = ({ addMessage, user }) => {
  const [text, setText] = useState('');
  const [isTextValid, setIsTextValid] = useState(true);

  const textChanged = (text) => {
    setText(text);
    setIsTextValid(Boolean(text));
  };

  const clearForm = () => {
    setText('');
  };

  const handleSendCLick = () => {
    const isValid = Boolean(text) && isTextValid;
    if (!isValid) {
      return;
    }
    addMessage({
      userId: user._id,
      user: user.name,
      text: text,
    });
    clearForm();
  };

  return (
    <div className="messages__input">
      <textarea
        placeholder="Enter text message here.."
        type="text"
        className="messages__input-field"
        value={text}
        onChange={(event) => textChanged(event.target.value)}
      />
      <button
        type="submit"
        className="messages__input-btn"
        onClick={handleSendCLick}
      >
        Send
      </button>
    </div>
  );
};

export default MessageForm;
