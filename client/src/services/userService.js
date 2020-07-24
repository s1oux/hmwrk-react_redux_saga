import callWebApi from '../helpers/webApiHelper';

export const login = async (request) => {
  const response = await callWebApi({
    endpoint: '/api/auth',
    type: 'post',
    request,
  });
  return response.json();
};

export const getUsers = async () => {
  const response = await callWebApi({
    endpoint: '/api/users',
    type: 'GET',
  });
  return response.json();
};

export const getUser = async (id) => {
  console.log(id);
  const response = await callWebApi({
    endpoint: `/api/users/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const registerUser = async (request) => {
  const response = await callWebApi({
    endpoint: '/api/users',
    type: 'POST',
    request,
  });
  return response.json();
};

export const editUser = async (request) => {
  const response = await callWebApi({
    endpoint: '/api/users',
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deleteUser = async (id) => {
  const response = await callWebApi({
    endpoint: `/api/users/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
