import { render, screen } from '@testing-library/react';
import Header from './index';

test('renders text', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Question and Answer tool/i);
  expect(linkElement).toBeInTheDocument();
});
