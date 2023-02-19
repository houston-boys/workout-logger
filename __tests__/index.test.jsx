import { render, screen } from '@testing-library/react'
import Home from '../src/pages/index'
import '@testing-library/jest-dom'

describe('Home', () => {
  it('renders a description', () => {
    render(<Home />);

    expect(screen.getByTestId("description")).toBeInTheDocument();
  })
});
