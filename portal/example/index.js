import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Portal from 'src/portal';

const render = (Component) => {
    const root = document.getElementById('root') || document.createElement('div');
    ReactDOM.render(<Component />, root);
};

const Example = () => {
    return (
        <Portal open={ true }>
            <h1>
                Hello Portal
                <div>KIKI</div>
            </h1>
        </Portal>
    )
}
render(Example);
