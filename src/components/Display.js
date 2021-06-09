import React from 'react';
import ProtoTypes from 'prop-types';

class Display extends React.Component {
    render() {
        // eslint-disable-next-line react/prop-types
        const { result } = this.props;
        return (
            <div className= 'result-card'>
                <p className='input-res'>2 * 0</p>
                <p className="cal-res">{result}</p>
            </div>
        );
    }
}

Display.prototypes = {
    result: ProtoTypes.string,
  };
  
  Display.defaultProps = {
    result: '0',
  };
  
  export default Display;