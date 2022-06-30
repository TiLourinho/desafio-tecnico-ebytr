/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useState } from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';
import Status from './Status';

const TaskList = ({ onDeleteClick, getTaskList }) => {
  const { taskList } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [taskId, setTaskId] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const onClickUpdate = (id) => (taskId === id ? setTaskId('') : setTaskId(id));

  const editTask = async (id) => {
    await axios.put(`http://localhost:3001/tasks/text/${id}`, {
      text: input,
    });
  };

  const handleUpdate = async (id) => {
    [...taskList].map((task) => {
      if (task.id === id) {
        setInput(task.id);
      }
      return task;
    });

    await editTask(id);
    setInput('');
    setTaskId('');
    getTaskList();
  };

  return (
    taskList.map((task) => (
      <div key={task.id}>
        <p>{task.name}</p>
        { taskId === task.id && (
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
              onClick={() => handleUpdate(task.id)}
            >
              Confirmar
            </button>
          </div>
        ) }
        <Status
          taskId={task.id}
          taskType={task.type}
        />
        <button
          className="input-button"
          type="button"
          onClick={() => onClickUpdate(task.id)}
        >
          Editar
        </button>
        <button
          className="input-button"
          type="button"
          onClick={() => onDeleteClick(task.id)}
        >
          Remover
        </button>
      </div>
    ))
  );
};

export default TaskList;
