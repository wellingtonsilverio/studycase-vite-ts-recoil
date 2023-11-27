import { render, screen } from '@testing-library/react';

import App from './App';

describe("App", () => {
    it('should display initial screen', () => {
        render(<App />);

        expect(screen.getByRole('heading', { name: /vite \+ react/i })).toBeInTheDocument()
    });
});