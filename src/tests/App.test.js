import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { act } from 'react-dom/test-utils';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

test('O primeiro link deve possuir o texto Home', () => {
  renderWithRouter(<App />);
  const buttonHome = screen.getByRole('link', {
    name: /home/i,
  });
  expect(buttonHome).toBeInTheDocument();
  expect(buttonHome).toHaveTextContent(/home/i);
});
test('O segundo link deve possuir o texto About', () => {
  renderWithRouter(<App />);
  const buttonAbout = screen.getByRole('link', {
    name: /about/i,
  });
  expect(buttonAbout).toBeInTheDocument();
  expect(buttonAbout).toHaveTextContent(/about/i);
});
test('O terceiro link deve possuir o texto Favorite Pokémons', () => {
  renderWithRouter(<App />);
  const buttonFavorite = screen.getByRole('link', {
    name: /favorite pokémons/i,
  });
  expect(buttonFavorite).toBeInTheDocument();
  expect(buttonFavorite).toHaveTextContent(/favorite pokémons/i);
});

test(' Na URL / ao clicar no link Home da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const buttonHome = screen.getByRole('link', {
    name: /home/i,
  });

  userEvent.click(buttonHome);

  expect(history.location.pathname).toBe('/');
});

test(' na URL /about, ao clicar no link About da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const buttonAbout = screen.getByRole('link', {
    name: /about/i,
  });

  userEvent.click(buttonAbout);

  expect(history.location.pathname).toBe('/about');
});

test('URL /favorites, ao clicar no link Favorite Pokémons da barra de navegação', () => {
  const { history } = renderWithRouter(<App />);
  const buttonFavorite = screen.getByRole('link', {
    name: /favorite pokémons/i,
  });

  userEvent.click(buttonFavorite);

  expect(history.location.pathname).toBe('/favorites');
});

test('página Not Found ao entrar em uma URL desconhecida', () => {
  const { history } = renderWithRouter(<App />);
  console.log(history);
  act(() => history.push('/Busca'));
  const notFound = screen.getByRole('heading', {
    name: /page requested not found/i,
  });

  expect(notFound).toHaveTextContent(/page requested not found/i);
});
