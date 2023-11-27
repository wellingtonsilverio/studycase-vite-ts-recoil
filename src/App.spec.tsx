import { render, screen } from '@testing-library/react';

import App from './App';

describe("App", () => {
    it('should work', () => {
        expect(1).toBe(1)
    });

    it('should display initial screen', () => {
        render(<App />);

        screen.debug();
    });
});