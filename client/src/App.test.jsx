/* eslint-disable no-undef */
import React from 'react';
import {
  render, cleanup, screen, waitFor, waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

beforeEach(() => {
  render(<App />);
});

afterEach(() => {
  cleanup();
});

describe('Home page', () => {
  describe('Header component', () => {
    it('tests if "Header" has an image of Ebytr logo', () => {
      const img = screen.getByAltText('Ebytr logo');
      expect(img).toBeInTheDocument();
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

    it('tests if adding a task it will be rendered', async () => {
      const input = screen.getByPlaceholderText('Adicione uma tarefa');
      userEvent.type(input, 'Teste');

      const button = await screen.findByRole('button', { name: /Adicionar/i });
      userEvent.click(button);

      const paragraph = await screen.findByText('Teste');
      await waitFor(() => expect(paragraph).toBeInTheDocument());
    });

    it('tests if a task can be removed when "Remover" button is clicked', async () => {
      const input = screen.getByPlaceholderText('Adicione uma tarefa');
      userEvent.type(input, 'Teste');

      const button = await screen.findByRole('button', { name: /Adicionar/i });
      userEvent.click(button);

      const removeButton = await screen.findByRole('button', { name: /Remover/i });
      userEvent.click(removeButton);

      const paragraph = await screen.findByText('Teste');
      await waitForElementToBeRemoved(paragraph);
      await waitFor(() => expect(paragraph).not.toBeInTheDocument());
    });
  });
});
