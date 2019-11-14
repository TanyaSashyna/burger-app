import React, { Component } from 'react';

import './Modal.css';
import Aux from '../../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {
    render() {
        const { show, modalClosed, children} = this.props;

        return (
            <Aux>
                <Backdrop show={show} clicked={modalClosed}/>
                <div 
                    className='Modal'
                    style={{
                        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: show ? '1' : '0'
                    }}
                >{children}</div>
            </Aux>
        )
    }
};

export default Modal;