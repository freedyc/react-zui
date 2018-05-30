import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portal from 'src/portal';
import Example from './example';

const render = (Component) => {
    const root = document.getElementById('root') || document.createElement('div');
    ReactDOM.render(<Component />, root);
};
render(Example);
