import React from 'react';
import ReactDOM from 'react-dom';
import Hotel from './Hotel';

it('renders without crashing', () => {
  const ul = document.createElement('ul');
  ReactDOM.render(<Hotel />, ul);
  ReactDOM.unmountComponentAtNode(ul);
});

