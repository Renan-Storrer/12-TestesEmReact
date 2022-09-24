import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import Pokemon from '../components/Pokemon';
import pokemon from '../data';

const charmander = pokemon[1];

test('nome correto do pokémon deve ser mostrado na tela', () => {
  renderWithRouter(<Pokemon pokemon={ charmander } isFavorite={ false } />);
  const name = screen.getByText(/charmander/i);
  expect(name).toHaveTextContent(/charmander/i);
});

test('O tipo correto do pokémon deve ser mostrado na tela', () => {
  renderWithRouter(<Pokemon pokemon={ charmander } isFavorite={ false } />);
  const typePokemon = screen.getByTestId('pokemon-type');
  expect(typePokemon).toBeInTheDocument();
  expect(typePokemon).toHaveTextContent(/Fire/i);
});

test('O peso médio do pokémon deve ser exibido com um texto no formato', () => {
  renderWithRouter(<Pokemon pokemon={ charmander } isFavorite={ false } />);
  const peso = screen.getByText(/average weight: 8\.5 kg/i);
  const { value, measurementUnit } = charmander.averageWeight;
  const pesoCompara = `Average weight: ${value} ${measurementUnit}`;
  expect(peso).toHaveTextContent(pesoCompara);
});

test('Imagem deve conter um atributo src com a URL da imagem e um atributo alt', () => {
  renderWithRouter(<Pokemon pokemon={ charmander } isFavorite={ false } />);
  const imagemPokemon = screen.getByRole('img', { name: /charmander sprite/i });
  const imgURL = 'https://cdn2.bulbagarden.net/upload/0/0a/Spr_5b_004.png';
  expect(imagemPokemon.src).toBe(imgURL);
  const altData = `${charmander.name} sprite`;
  expect(imagemPokemon.alt).toBe(altData);
});

test('A imagem de favorito star possui o src /star-icon.svg', () => {
  renderWithRouter(<Pokemon pokemon={ charmander } isFavorite />);
  const iconStar = screen.getByRole('img', { name: /charmander is marked as favorite/i });
  const imgURL = 'http://localhost/star-icon.svg';
  expect(iconStar.src).toBe(imgURL);
  const altIconStar = `${charmander.name} is marked as favorite`;
  expect(iconStar.alt).toBe(altIconStar);
});

test('Teste também se a URL exibida no navegador muda para /pokemon/4', () => {
  const { history } = renderWithRouter(<Pokemon pokemon={ charmander } isFavorite />);
  const buttonMoreDetails = screen.getByRole('link', { name: /more details/i });
  userEvent.click(buttonMoreDetails);
  const link = '/pokemons/4';
  expect(history.location.pathname).toBe(link);
});
