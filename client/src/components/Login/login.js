import React, { useState, useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { loginUser } from '../../actions/userActions';

const Login = ({ error, loginUser, authenticated, history }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    if (authenticated) {
      if (authenticated.role === 'user') {
        history.push('/chat');
      } else if (authenticated.role === 'admin') {
        history.push('/admin');
      }
    }
  }, [authenticated]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'username':
        setUsername(event.target.value);
        break;
      case 'password':
        setPassword(event.target.value);
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formValidity = Boolean(username) && Boolean(password);
    setIsValid(formValidity);

    if (!formValidity) {
      return;
    }

    loginUser({
      name: username,
      password: password,
    });
  };

  return (
    <div className="form-container">
      <h3>Sign In</h3>
      {Boolean(error) && <div className="error">{error}</div>}
      <form onSubmit={handleSubmit} className="form">
        <div className="form-inputs">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={handleChange}
            name="username"
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={handleChange}
            name="password"
          />
        </div>
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  users: state.user.users,
  authenticated: state.user.authenticatedUser,
  error: state.user.error,
});

const actions = {
  loginUser,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
