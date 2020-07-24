import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { editMessage } from '../../actions/messageActions';

const EditMessageView = ({ history, editMessage, messageOnEdit }) => {
  const [text, setText] = useState(messageOnEdit.text);
  const [isTextValid, setIsTextValid] = useState(true);

  const textChanged = (text) => {
    setText(text);
    setIsTextValid(Boolean(text));
  };

  const clearForm = () => {
    setText('');
  };

  const handleEditCLick = () => {
    const isValid = Boolean(text) && isTextValid;
    if (!isValid) {
      return;
    }
    const updatedMessage = {
      ...messageOnEdit,
      text: text,
    };

    editMessage(updatedMessage);
    clearForm();
    history.push('/chat');
  };

  return (
    <div className="form-container">
      <NavLink className="back-btn" to="/chat">
        &larr; Back
      </NavLink>
      <h3>Edit message</h3>
      <div className="input-area">
        <textarea
          placeholder="Enter new message text here.."
          type="text"
          className="edit-input"
          value={text}
          onChange={(event) => textChanged(event.target.value)}
        />
        <button className="input-btn" onClick={handleEditCLick}>
          Edit
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (rootState) => ({
  messageOnEdit: rootState.messages.messageOnEdit,
});

const actions = {
  editMessage,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(EditMessageView);
