import { fireEvent, render, screen } from '@testing-library/react';
import Button from './';

describe('Button Component', () => {
  it('should render component', () => {
    const { container } = render(<Button />);

    expect(container).toMatchSnapshot();
  });

  it('should render text in button', () => {
    render(<Button>Hi</Button>);

    expect(screen.getByText('Hi')).toBeInTheDocument();
  });

  it('should onClick call function', () => {
    const ff = jest.fn();

    render(<Button onClick={ff}>Hi</Button>);

    const buttonRended = screen.getByRole('button');
    fireEvent.click(buttonRended);

    expect(ff).toHaveBeenCalled();
  });
});
