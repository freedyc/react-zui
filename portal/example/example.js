import React, { Component } from 'react';
import Portal from 'src/portal';
class Example extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        } 
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton() {
        this.setState({open: true})
    }

    render () {
        return (
            <div>
                <button onClick={ this.handleButton }>测试</button>
                <Portal open={ this.state.open }>
                    <div>
                        弹出
                    </div>
                </Portal>
            </div>
        )
    }
}


export default Example;
