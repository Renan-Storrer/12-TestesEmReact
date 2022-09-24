import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';
import pokemon from '../data';

const pikachu = pokemon[0];

beforeEach(() => {
  renderWithRouter(<App
    pokemon={ pikachu }
    isFavorite
  />);
  const buttonDetails = screen.getByRole('link', { name: /more details/i });
  userEvent.click(buttonDetails);
});
test('É exibido na tela um h2 com o texto <name> Details', () => {
  const title = screen.getByRole('heading', { name: /pikachu details/i });
  const dataTitle = `${pikachu.name} Details`;
  expect(title).toHaveTextContent(dataTitle);
});
test('É exibido na tela um h2 com o texto Summary', () => {
  const titleSumary = screen.getByRole('heading', { name: /summary/i });
  expect(titleSumary).toBeInTheDocument();
});

test('É exibido na tela um <p> com o texto Summary', () => {
  const paragraph = screen
    .getByText(
      /this intelligent pokémon roasts hard berries with/i,
    );
  const paragraphData = `${pikachu.summary}`;
  expect(paragraph).toHaveTextContent(paragraphData);
});

test('É exibido na tela um h2 com o texto Game Locations of <name>', () => {
  const titleLocation = screen.getByRole('heading', {
    name: /game locations of pikachu/i,
  });
  const dataTitle = `Game Locations of ${pikachu.name}`;
  expect(titleLocation).toHaveTextContent(dataTitle);
});

test('É exibido na tela uma label com o texto Pokémon favoritado?', () => {
  const titleLocation = screen.getByText(/pokémon favoritado\?/i);
  const dataTitle = /Pokémon favoritado?/i;
  expect(titleLocation).toHaveTextContent(dataTitle);
});

test('São exibidas na tela imagens de localização com o src correto', () => {
  const imagens = screen.getAllByAltText(/Pikachu location/i);
  expect(imagens[0]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');
  expect(imagens[1]).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/b/bd/Kanto_Celadon_City_Map.png');
  expect(imagens.length).toBe(2);
});
