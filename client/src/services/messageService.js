import callWebApi from '../helpers/webApiHelper';

export const getMessages = async () => {
  const response = await callWebApi({
    endpoint: '/api/messages',
    type: 'GET',
  });
  return response.json();
};

export const getMessage = async (id) => {
  const response = await callWebApi({
    endpoint: `/api/messages/${id}`,
    type: 'GET',
  });
  return response.json();
};

export const addMessage = async (request) => {
  const response = await callWebApi({
    endpoint: '/api/messages',
    type: 'POST',
    request,
  });
  return response.json();
};

export const editMessage = async (request) => {
  const response = await callWebApi({
    endpoint: '/api/messages',
    type: 'PUT',
    request,
  });
  return response.json();
};

export const toggleLikeMessage = async (request) => {
  const response = await callWebApi({
    endpoint: '/api/messages/react',
    type: 'PUT',
    request,
  });
  return response.json();
};

export const deleteMessage = async (id) => {
  const response = await callWebApi({
    endpoint: `/api/messages/${id}`,
    type: 'DELETE',
  });
  return response.json();
};
