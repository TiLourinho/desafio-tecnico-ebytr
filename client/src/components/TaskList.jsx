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
      <div key={task.id} className="task-list">
        <div>
          <p>{task.name}</p>
          <div className="edit-task">
            { taskId === task.id && (
              <form>
                <input
                  className="edit-input"
                  type="text"
                  placeholder="Edite esta tarefa"
                  name="edit-text"
                  value={input}
                  onChange={handleChange}
                  spellCheck="false"
                  autoFocus
                />
                <button
                  className="edit-button"
                  type="button"
                  onClick={() => handleUpdate(task.id)}
                >
                  Confirmar
                </button>
              </form>
            ) }
          </div>
          <div>
            <Status
              taskId={task.id}
              taskStatus={task.status}
            />
            <button
              className="task-button"
              type="button"
              onClick={() => onClickUpdate(task.id, task.name)}
            >
              Editar
            </button>
            <button
              className="task-button"
              type="button"
              onClick={() => onDeleteClick(task.id)}
            >
              Remover
            </button>
          </div>
        </div>
      </div>
    ))
  );
};

export default TaskList;
