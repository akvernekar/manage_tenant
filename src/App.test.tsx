import { render, screen } from '@testing-library/react';
import { client } from './config';
import App from './App';

test('renders learn react link', () => {
  render(<App client={client} />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
