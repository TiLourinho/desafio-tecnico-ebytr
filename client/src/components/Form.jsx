import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Form = () => {
  const [input, setInput] = useState('');
  const [taskList, setTaskList] = useState([]);

  const getTaskList = async () => {
    const response = await axios.get('http://localhost:3001/tasks');

    setTaskList(response.data);
  };

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post('http://localhost:3001/tasks', {
      text: input,
    });

    setInput('');
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
      {taskList.map((elem) => (
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
      ))}
    </section>
  );
};

export default Form;
