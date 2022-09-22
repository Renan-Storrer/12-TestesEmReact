import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import About from '../pages/About';

test('Teste se a página contém as informações sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const titlePokedex = screen.getByRole('heading', { name: /about pokédex/i });
  expect(titlePokedex).toHaveTextContent(/About Pokédex/i);
});

test('Teste se a página contém um heading h2 com o texto About Pokédex', () => {
  renderWithRouter(<About />);
  const titlePokedex = screen.getByRole('heading', { name: /about pokédex/i });
  expect(titlePokedex).toContainHTML('<h2>About Pokédex</h2>');
});

test('Teste se a página contém dois parágrafos com texto sobre a Pokédex', () => {
  renderWithRouter(<About />);
  const getParagraph = screen.getAllByText(/Pokémons/i);
  expect(getParagraph.length).toBe(2);
});

test('este se a página contém a seguinte imagem de uma Pokédex: https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png', () => {
  renderWithRouter(<About />);
  const imagem = screen.getByRole('img', {
    name: /pokédex/i,
  });
  const imgURL = 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png';
  expect(imagem.src).toBe(imgURL);
});
