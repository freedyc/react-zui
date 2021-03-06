import React, { Component }  from 'react';
import Modal from 'src/modal';
import './modal.scss';

class Example extends Component {
    state = { open: false, header: false, mask: false }

    show = () => { this.setState({ open: true, showHeader: true, showMask: true  })}
    show1 = () => { this.setState({ open: true, showHeader: true, showMask: false  })}
    show2 = () => { this.setState({ open: true, showHeader: false, showMask: false })}

    close = () => { this.setState({ open: false })}

    ok = () => { this.close() }

    render() {
        return (
            <div>
                <button type="button" onClick={ this.show }>Show All</button>
                <button type="button" onClick={ this.show1 }>Hide Mask</button>
                <button type="button" onClick={ this.show2 }>Hide Header, Mask</button>
                <Modal {...this.state} close={this.close} size={{width: 500, height: 300}}>
                    <h1>You Contnet</h1>
                    <h2>You content</h2>
                    <h3>You content</h3>
                    <h4>You content</h4>
                    <h5>You content</h5>
                    <h6>You content</h6>
                </Modal>
            </div>
        )
    }
};



export default Example;
