import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('Teste se a página contém um heading h2 com o texto Encountered pokémons', () => {
  renderWithRouter(<App />);
  const title = screen.getByRole('heading', { name: /encountered pokémons/i });
  expect(title).toHaveTextContent(/Encountered pokémons/i);
});

test('Teste se é exibido o próximo pokémon da lista', () => {
  renderWithRouter(<App />);
  const buttonNext = screen.getByRole('button', { name: /próximo pokémon/i });
  expect(buttonNext).toHaveTextContent(/Próximo pokémon/i);
  userEvent.click(buttonNext);
  const charmander = screen.getByRole('img', { name: /charmander sprite/i });
  expect(charmander).toBeInTheDocument();
  userEvent.click(buttonNext);
  const caterpie = screen.getByRole('img', { name: /caterpie sprite/i });
  expect(caterpie).toBeInTheDocument();
  userEvent.click(buttonNext);
  const ekans = screen.getByRole('img', { name: /ekans sprite/i });
  expect(ekans).toBeInTheDocument();
  userEvent.click(buttonNext);
  const alakazam = screen.getByRole('img', { name: /alakazam sprite/i });
  expect(alakazam).toBeInTheDocument();
  userEvent.click(buttonNext);
  const mew = screen.getByRole('img', { name: /mew sprite/i });
  expect(mew).toBeInTheDocument();
  userEvent.click(buttonNext);
  const rapidash = screen.getByRole('img', { name: /rapidash sprite/i });
  expect(rapidash).toBeInTheDocument();
  userEvent.click(buttonNext);
  const snorlax = screen.getByRole('img', { name: /snorlax sprite/i });
  expect(snorlax).toBeInTheDocument();
  userEvent.click(buttonNext);
  const dragonair = screen.getByRole('img', { name: /dragonair sprite/i });
  expect(dragonair).toBeInTheDocument();
  userEvent.click(buttonNext);
  const pikachu = screen.getByRole('img', { name: /pikachu sprite/i });
  expect(pikachu).toBeInTheDocument();
});

test('Teste se é exibido o próximo pokémon da lista', () => {
  renderWithRouter(<App />);
  const eletric = screen.getByRole('button', { name: /electric/i });
  expect(eletric).toHaveTextContent(/electric/i);
  const fire = screen.getByRole('button', { name: /fire/i });
  expect(fire).toHaveTextContent(/fire/i);
  const bug = screen.getByRole('button', { name: /bug/i });
  expect(bug).toHaveTextContent(/bug/i);
  const poison = screen.getByRole('button', { name: /poison/i });
  expect(poison).toHaveTextContent(/poison/i);
  const psychic = screen.getByRole('button', { name: /psychic/i });
  expect(psychic).toHaveTextContent(/psychic/i);
  const normal = screen.getByRole('button', { name: /normal/i });
  expect(normal).toHaveTextContent(/normal/i);
  const dragon = screen.getByRole('button', { name: /dragon/i });
  expect(dragon).toHaveTextContent(/dragon/i);
  const all = screen.getByRole('button', { name: /all/i });
  expect(all).toBeInTheDocument();

  const numberSeven = 7;
  const buttonsFilter = screen.getAllByTestId('pokemon-type-button');
  expect(buttonsFilter.length).toBe(numberSeven);
});

test('Teste se a Pokédex contém um botão para resetar o filtro:', () => {
  renderWithRouter(<App />);
  const buttonAll = screen.getByRole('button', { name: /all/i });
  userEvent.click(buttonAll);
});
