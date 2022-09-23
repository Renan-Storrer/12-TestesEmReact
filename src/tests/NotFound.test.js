import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import NotFound from '../pages/NotFound';

test('Teste se a página mostra a imagem: https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
  renderWithRouter(<NotFound />);
  const imagem = screen.getByRole('img', {
    name: /pikachu crying because the page requested was not found/i,
  });
  const imgURL = 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif';
  expect(imagem.src).toBe(imgURL);
});

test('este se a página contém um heading h2 com o texto Page requested not found', () => {
  renderWithRouter(<NotFound />);
  const title = screen.getByRole('heading', { name: /page requested not found/i });
  expect(title).toBeInTheDocument();
});
