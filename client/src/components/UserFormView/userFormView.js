import React, { useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { addUser, editUser } from '../../actions/userActions';

const UserFormView = ({ error, history, addUser, editUser, userOnEdit }) => {
  const [name, setName] = useState(userOnEdit?.name);
  const [surname, setSurname] = useState(userOnEdit?.surname);
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'surname':
        setSurname(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
    }
  };

  const handleEditSubmit = (event) => {
    event.preventDefault();
    const formValidity = Boolean(name) && Boolean(surname);
    setIsValid(formValidity);

    if (!formValidity) {
      return;
    }

    const updatedUser = {
      ...userOnEdit,
      name: name || userOnEdit.name,
      surname: surname || userOnEdit.surname,
    };
    editUser(updatedUser);
    history.push('/admin');
  };

  const handleAddSubmit = (event) => {
    event.preventDefault();
    const formValidity = Boolean(name) && Boolean(surname) && Boolean(password);
    setIsValid(formValidity);

    if (!formValidity) {
      return;
    }

    addUser({ name: name, surname: surname, password: password });
    if (!error) {
      history.push('/admin');
    }
  };

  return (
    <div className="form-container">
      <NavLink className="back-btn" to="/admin">
        &larr; Back
      </NavLink>
      <div>
        {userOnEdit ? (
          <h3>Edit user</h3>
        ) : (
          <div>
            <h3>Register user</h3>
            {error && <div className="error">{error}</div>}
          </div>
        )}
      </div>
      <form
        className="form"
        onSubmit={Boolean(userOnEdit) ? handleEditSubmit : handleAddSubmit}
      >
        <div className="form-inputs">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={name}
            placeholder="Enter name"
            onChange={handleChange}
            name="name"
          />
          <label htmlFor="surname">Surname</label>
          <input
            type="text"
            value={surname}
            placeholder="Enter surname"
            onChange={handleChange}
            name="surname"
          />
          {!userOnEdit && <label htmlFor="password">Password</label>}
          {!userOnEdit && (
            <input
              type="password"
              value={password}
              placeholder="Enter password"
              onChange={handleChange}
              name="password"
            />
          )}
        </div>
        <button type="submit">
          {Boolean(userOnEdit) ? 'Edit' : 'Add'} user
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (rootState) => ({
  userOnEdit: rootState.user.userOnEdit,
  error: rootState.user.error,
});

const actions = {
  addUser,
  editUser,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserFormView);
