/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';
import TaskList from './TaskList';

const Form = () => {
  const { setTaskList } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const getTaskList = async () => {
    const response = await axios.get('http://localhost:3001/tasks');

    setTaskList(response.data);
  };

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSelect = ({ target }) => {
    setOrderBy(target.value);
    getTaskList();
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await axios.post('http://localhost:3001/tasks', {
      text: input,
    });

    getTaskList();
    setInput('');
  };

  const onDeleteClick = async (id) => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);

    getTaskList();
  };

  const handleFilter = (a, b) => {
    if (a[orderBy] < b[orderBy]) return -1;
    if (a[orderBy] > b[orderBy]) return 1;

    return 0;
  };

  useEffect(() => {
    getTaskList();
  }, []);

  return (
    <section>
      <form className="form" onSubmit={handleSubmit}>
        <input
          className="input-text"
          type="text"
          placeholder="Adicione uma tarefa"
          name="input-text"
          value={input}
          onChange={handleChange}
          autoFocus
        />
        <button
          className="input-button"
          type="submit"
        >
          Adicionar
        </button>
      </form>
      <select value={orderBy} onChange={handleSelect}>
        <option value="">Escolha um filtro</option>
        <option value="name">A-Z</option>
        <option value="register_date">Data</option>
        <option value="type">Status</option>
      </select>
      <TaskList
        onDeleteClick={onDeleteClick}
        getTaskList={getTaskList}
        handleFilter={handleFilter}
      />
    </section>
  );
};

export default Form;
