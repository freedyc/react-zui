import React, { Component } from 'react';
import Header from './header';
import Form from './form';
import Actions from './actions';
import Message from './message';

class Modal extends Component {
    render() {
        const {
            close,
            ok
        } = this.props;
        return (
            <div className="ui modals">
                <div className="modal">
                    <Header close={close} />
                    <Message type="error"/>
                    <Message type="info" />
                    <Form />
                    <Actions ok={ok} close={close} />
                </div>
            </div>
        )
    }
}

export default Modal;

