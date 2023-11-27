import { render } from '@testing-library/react';
import { RecoilRoot } from 'recoil';

const recoilRender = (component: JSX.Element) => {
  return render(
    <RecoilRoot>
      {component}
    </RecoilRoot>
  )
}

export default recoilRender;
