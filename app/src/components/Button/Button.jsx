// Button.jsx
import React from 'react';

const Button = ({ children, className, ...rest }) => {
  return (
    <button className={`bg-blue-600 text-white px-4 py-2 rounded ${className}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;
