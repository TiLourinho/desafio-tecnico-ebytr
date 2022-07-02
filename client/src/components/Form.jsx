/* eslint-disable jsx-a11y/no-autofocus */
import React, { useState, useContext, useEffect } from 'react';
import AppContext from '../context/AppContext';
import TaskList from './TaskList';
import { getTasks, postTasks, deleteTasks } from '../helpers/connectors';

const Form = () => {
  const { setTaskList } = useContext(AppContext);
  const [input, setInput] = useState('');
  const [orderBy, setOrderBy] = useState('');

  const getTaskList = async () => {
    const response = await getTasks();

    setTaskList(response);
  };

  useEffect(() => {
    getTaskList();
  }, []);

  const handleChange = ({ target }) => setInput(target.value);

  const handleSelect = ({ target }) => {
    setOrderBy(target.value);
    getTaskList();
  };

  const handleSubmit = async (event) => {
    const body = { text: input };

    event.preventDefault();
    await postTasks(body);
    getTaskList();
    setInput('');
  };

  const onDeleteClick = async (id) => {
    await deleteTasks(id);

    getTaskList();
  };

  const handleFilter = (a, b) => {
    if (a[orderBy] < b[orderBy]) return -1;
    if (a[orderBy] > b[orderBy]) return 1;

    return 0;
  };

  return (
    <section>
      <form
        className="form"
        onSubmit={handleSubmit}
      >
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
      <select
        value={orderBy}
        onChange={handleSelect}
      >
        <option value="">Escolha um filtro</option>
        <option value="name">A-Z</option>
        <option value="register_date">Data</option>
        <option value="status">Status</option>
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
