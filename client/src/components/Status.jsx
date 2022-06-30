import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

const Status = ({ taskId, taskType }) => {
  const [type, setType] = useState(taskType);

  const editType = async (id) => {
    await axios.put(`http://localhost:3001/tasks/type/${id}`, {
      type,
    });
  };

  const handleChange = (event) => {
    setType(event.target.value);
  };

  useEffect(() => {
    editType(taskId, taskType);
  }, [type]);

  return (
    <select value={type} onChange={handleChange}>
      <option value="">Escolha um status</option>
      <option value="Pendente">Pendente</option>
      <option value="Em andamento">Em andamento</option>
      <option value="Pronto">Pronto</option>
    </select>
  );
};

Status.propTypes = {
  task: PropTypes.number,
  taskType: PropTypes.string,
}.isRequired;

export default Status;
