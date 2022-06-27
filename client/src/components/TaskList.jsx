import React, { useContext } from 'react';
import AppContext from '../context/AppContext';

const TaskList = () => {
  const { taskList } = useContext(AppContext);

  return (
    taskList.map((elem) => (
      <div key={elem.id}>
        <p>{elem.name}</p>
        <button
          className="input-button"
          type="button"
          // onClick=""
        >
          Editar
        </button>
        <button
          className="input-button"
          type="button"
          // onClick=""
        >
          Remover
        </button>
      </div>
    ))
  );
};

export default TaskList;
