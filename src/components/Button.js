import React from 'react';
import Prototypes, { number } from 'prop-types';

class Button extends React.Component {
    render(){
        constant {number,color} = this.props;
        return (
            <button type="button" className={color}>
                {' '}
                {number}
                {' '}
            </button>
        )

    }
}