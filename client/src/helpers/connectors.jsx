import axios from 'axios';

const URL = 'http://localhost:3001/tasks';

const getTasks = async () => {
  const response = await axios.get(URL);
  const { data } = response;

  return data;
};

const postTasks = async (body) => {
  const response = await axios.post(URL, body);

  return response;
};

const deleteTasks = async (id) => {
  const response = await axios.delete(`${URL}/${id}`);

  return response;
};

const putTasksNames = async (id, body) => {
  const response = await axios.put(`${URL}/text/${id}`, body);

  return response;
};

const putTasksStatus = async (id, body) => {
  const response = await axios.put(`${URL}/status/${id}`, body);

  return response;
};

export {
  getTasks,
  postTasks,
  deleteTasks,
  putTasksNames,
  putTasksStatus,
};
