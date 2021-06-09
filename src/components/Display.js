import React from 'react';
import Prototypes from 'prop-types';

class Display extends React.Component {
    render() {
        const {result} = this.props;
        return (
            <div className= 'result-card'>
                <p className='input-res'>2 * 0</p>
                <p className="cal-res">{result}</p>
            </div>
        );
    }
}