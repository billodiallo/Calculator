/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';


class Button extends React.Component {
  render() {
    const { number, color } = this.props;
    return (
      <button type="button" className={color}>
        {' '}
        {number}
        {' '}
      </button>

    );
  }
}

Button.prototypes = {
  color: PropTypes.bool,
  number: PropTypes.array,
};

Button.defaultProps = {
  number: 0,
  color: false,
};

export default Button;
