/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
// import Header from './components/Header';
// import Form from './components/Form';
import App from './App';

beforeEach(() => {
  render(<App />);
});

describe('Home page', () => {
  describe('Header component', () => {
    it('tests if "Header" has a h1 containing "Ebytr"', () => {
      const title = screen.getByRole('heading', { level: 1, name: /Ebytr/i });
      expect(title).toBeInTheDocument();
    });

    it('tests if "Header" has a h2 containing "Gerenciador de Tarefas"', () => {
      const title = screen.getByRole('heading', { level: 2, name: /Gerenciador de Tarefas/i });
      expect(title).toBeInTheDocument();
    });
  });

  describe('Form component', () => {
    it('tests if "Form" has an input containing "Adicione uma tarefa"', () => {
      const input = screen.getByPlaceholderText('Adicione uma tarefa');
      expect(input).toBeInTheDocument();
    });

    it('tests if "Form" has a "Adicionar" button ', () => {
      const button = screen.getByRole('button', { name: /Adicionar/i });
      expect(button).toBeInTheDocument();
    });

    it('tests if "Form" has a select containing "Escolha um filtro"', () => {
      const select = screen.getByText('Escolha um filtro');
      expect(select).toBeInTheDocument();
    });
  });
});
