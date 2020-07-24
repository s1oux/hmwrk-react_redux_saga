import React, { useEffect } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Spinner from '../../components/Spinner/spinner';
import UserList from '../../components/UserList/userList';

import './adminPage.css';

import {
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
  selectUserOnEdit,
} from '../../actions/userActions';

const AdminPage = ({
  currentUser,
  users,
  isLoading,
  getUsers,
  deleteUser,
  selectUserOnEdit,
  history,
}) => {
  useEffect(() => {
    getUsers();
  }, []);

  const handleAddUserBtnClick = () => {
    history.push('/admin/userform');
  };

  return (
    <div>
      {isLoading ? (
        <Spinner />
      ) : (
        <div className="admin-container">
          <button className="add-btn" onClick={handleAddUserBtnClick}>
            Add User
          </button>
          <UserList
            currentUser={currentUser}
            users={users}
            deleteUser={deleteUser}
            openEdit={selectUserOnEdit}
          />
        </div>
      )}
    </div>
  );
};

AdminPage.defaultProps = {
  users: [],
  userOnEdit: undefined,
  isLoading: true,
};

const mapStateToProps = (rootState) => ({
  currentUser: rootState.user.authenticatedUser,
  users: rootState.user.users,
  isLoading: rootState.user.loading,
  userOnEdit: rootState.user.userOnEdit,
});

const actions = {
  getUsers,
  getUser,
  addUser,
  editUser,
  deleteUser,
  selectUserOnEdit,
};

const mapDispatchToProps = (dispatch) => bindActionCreators(actions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
