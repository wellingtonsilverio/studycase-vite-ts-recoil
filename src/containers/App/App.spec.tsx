import { screen } from '@testing-library/react';
import recoilRender from '../../utils/jest/recoilRender';

import App from '.';

describe('App Container', () => {
  it('should display initial screen', () => {
    recoilRender(<App />);

    expect(screen.getByRole('heading', { name: /vite \+ react \+ recoil/i })).toBeInTheDocument();
  });
});
