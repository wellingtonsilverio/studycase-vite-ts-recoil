import { render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

import App from '.';

const renderWithRecoil = (component: JSX.Element) => {
  return render(
    <RecoilRoot>
      {component}
    </RecoilRoot>
  )
}

describe('App Container', () => {
  it('should display initial screen', () => {
    renderWithRecoil(<App />);

    expect(screen.getByRole('heading', { name: /vite \+ react \+ recoil/i })).toBeInTheDocument();
  });
});
