import { render, screen } from '@testing-library/react';

import App from '.';

describe('App Container', () => {
  it('should display initial screen', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument();
  });
});
