import React from 'react';
import './index.css';

const Button = (props) => {
  const { classStyle, text, id } = props;
  return (
    <button id={id} className={classStyle} onClick={() => props.onClick()}>
      {text}
    </button>
  );
};
export default Button;
