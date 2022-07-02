/* eslint-disable jsx-a11y/no-autofocus */
import React, { useContext, useState } from 'react';
import AppContext from '../context/AppContext';
import Status from './Status';
import { putTasksNames } from '../helpers/connectors';

const TaskList = ({ onDeleteClick, getTaskList, handleFilter }) => {
  const { taskList } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [taskId, setTaskId] = useState('');

  const handleChange = ({ target }) => setInput(target.value);

  const onClickUpdate = (id, text) => (
    taskId === id ? (setTaskId(''), setInput('')) : (setTaskId(id), setInput(text))
  );

  const editTask = async (id) => {
    const body = { text: input };

    await putTasksNames(id, body);
  };

  const handleUpdate = async (id) => {
    await editTask(id);
    setInput('');
    setTaskId('');
    getTaskList();
  };

  return (
    taskList.sort(handleFilter).map((task) => (
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
          taskStatus={task.status}
        />
        <button
          className="input-button"
          type="button"
          onClick={() => onClickUpdate(task.id, task.name)}
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
