import React from 'react';
import { withRouter } from 'react-router-dom';

import './userList.css';

const userList = ({ currentUser, users, deleteUser, openEdit, history }) => {
  const usersWithoutAdmins = users.filter((user) => user.role !== 'admin');

  const handleEditBtnClick = (user) => {
    openEdit(user);
    history.push('/admin/userform');
  };

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {usersWithoutAdmins.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.surname}</td>
              <td>
                <button
                  className=" table-btn primary"
                  onClick={() => handleEditBtnClick(user)}
                >
                  edit
                </button>
              </td>
              <td>
                <button
                  className="table-btn danger"
                  onClick={() => deleteUser(user._id)}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default withRouter(userList);
