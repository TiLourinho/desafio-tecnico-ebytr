/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';

const TaskList = ({ onDeleteClick, getTaskList }) => {
  const { taskList } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [taskId, setTaskId] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const onClickUpdate = (id) => (taskId === id ? setTaskId('') : setTaskId(id));

  const editTask = async (id) => {
    await axios.put(`http://localhost:3001/tasks/${id}`, {
      text: input,
    });
  };

  const handleUpdate = async (id) => {
    [...taskList].map((elem) => {
      const task = elem;

      if (task.id === id) {
        task.name = input;
      }
      return task;
    });

    await editTask(id);
    setInput('');
    setTaskId('');
    getTaskList();
  };

  return (
    taskList.map((elem) => (
      <div key={elem.id}>
        <p>{elem.name}</p>
        { taskId === elem.id && (
          <div>
            <input
              className="edit-text"
              type="text"
              placeholder="Edite esta tarefa"
              name="input-text"
              value={input}
              onChange={handleChange}
              autoFocus
            />
            <button
              className="edit-button"
              type="button"
              onClick={() => handleUpdate(elem.id)}
            >
              Confirmar
            </button>
          </div>
        ) }
        <button
          className="input-button"
          type="button"
          onClick={() => onClickUpdate(elem.id)}
        >
          Editar
        </button>
        <button
          className="input-button"
          type="button"
          onClick={() => onDeleteClick(elem.id)}
        >
          Remover
        </button>
      </div>
    ))
  );
};

export default TaskList;
