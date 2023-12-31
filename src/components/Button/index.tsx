import React from 'react';

interface Props {
  children?: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default Button;
