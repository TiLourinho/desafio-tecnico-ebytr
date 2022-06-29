import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';
import AppContext from '../context/AppContext';
import TaskList from './TaskList';

const Form = () => {
  const { setTaskList } = useContext(AppContext);
  const [input, setInput] = useState('');

  const getTaskList = async () => {
    const response = await axios.get('http://localhost:3001/tasks');

    setTaskList(response.data);
  };

  const handleChange = ({ target }) => {
    setInput(target.value);
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
        />
        <button
          className="input-button"
          type="submit"
        >
          Adicionar
        </button>
      </form>
      <TaskList onDeleteClick={onDeleteClick} />
    </section>
  );
};

export default Form;
