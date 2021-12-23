import { render, screen } from '@testing-library/react';
import App from './App';

test('renders text', () => {
  render(<App />);
  const linkElement = screen.getByText(/Here you can find a few questions. Feel free to create your own questions!/i);
  expect(linkElement).toBeInTheDocument();
});
