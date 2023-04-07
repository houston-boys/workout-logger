import { render, screen, waitFor } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'
import { UserProvider } from '@auth0/nextjs-auth0/client';

    it('renders a description', async () => {
      render(
        <UserProvider>
          <Home />
        </UserProvider>
      );

      await waitFor(() => {
        expect(screen.getByTestId("description")).toBeInTheDocument();
      });
    });