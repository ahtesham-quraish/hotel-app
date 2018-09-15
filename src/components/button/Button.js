import React from 'react';
import './index.css';
import pure from 'recompose/pure';
const Button = (props) => {
  const { classStyle, text, id } = props;
  return (
    <button id={id} className={classStyle} onClick={() => props.onClick()}>
      {text}
    </button>
  );
};
export default pure(Button);
