import React, { useState } from 'react';

const Form = () => {
  const [input, setInput] = useState('');

  const handleChange = ({ target }) => {
    setInput(target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput('');
  };

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
    </section>
  );
};

export default Form;
