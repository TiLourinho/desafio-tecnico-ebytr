import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { putTasksStatus } from '../helpers/connectors';

const Status = ({ taskId, taskStatus }) => {
  const [status, setStatus] = useState(taskStatus);

  const handleChange = (event) => setStatus(event.target.value);

  const editStatus = async (id) => {
    const body = { status };

    await putTasksStatus(id, body);
  };

  useEffect(() => {
    editStatus(taskId, taskStatus);
  }, [status]);

  return (
    <select
      className="edit-select"
      value={status}
      onChange={handleChange}
    >
      {/* <option value="">Escolha um status</option> */}
      <option value="Pendente">Pendente</option>
      <option value="Em andamento">Em andamento</option>
      <option value="Pronto">Pronto</option>
    </select>
  );
};

Status.propTypes = {
  taskId: PropTypes.number,
  taskStatus: PropTypes.string,
}.isRequired;

export default Status;
