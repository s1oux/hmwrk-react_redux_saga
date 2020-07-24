import React from 'react';
import { connect } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';

import './header.css';

const Header = ({ currentUser }) => {
  const location = useLocation();
  return (
    <div className="header">
      <div className="header__logo">
        <h3>chat-app</h3>
      </div>
      <div className="links">
        {currentUser?.role === 'admin' ? (
          location.pathname === '/admin' ? (
            <NavLink className="link" to="/chat">
              Chat
            </NavLink>
          ) : (
            <NavLink className="link" to="/admin">
              Admin page
            </NavLink>
          )
        ) : (
          ''
        )}
        {currentUser && (
          <a className="link" onClick={() => window.location.reload()}>
            Logout
          </a>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (rootState) => ({
  currentUser: rootState.user.authenticatedUser,
});

export default connect(mapStateToProps)(Header);
