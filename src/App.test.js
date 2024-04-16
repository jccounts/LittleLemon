import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'
import App from './App';


test('renders Reserve a table call to action', () => {
  render(
      <BrowserRouter>
          <App />
      </BrowserRouter>
  );
  const linkElement = screen.getByText(/Reserve a table/i);
  expect(linkElement).toBeInTheDocument();
});


test('navigates to reservations page and finds Reserve Table button', () => {
  render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
  );

  const reservationsLinks = screen.getAllByText(/Reservations/i);
  const firstReservationsLink = reservationsLinks[0];
  fireEvent.click(firstReservationsLink);

  const reserveTableButton = screen.getByText(/Reserve Table/i);
  expect(reserveTableButton).toBeInTheDocument();
});
