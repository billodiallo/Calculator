import React, { Component } from 'react';
import PropTypes from 'prop-types';
import operate from '../logic/operate';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    const { buttonName, handleClick } = this.props;
    let btnStyle = 'normal-button';
    if (['/','-','+','=','+/-','%'].includes(buttonName)){
      btnStyle = 'operation-button';
    }

    return (
      <button type="button"
      onClick={() => handleClick(buttonName)}
    )

    return (
      <p className="button">{buttonName}</p>
    );
  }
}

Button.propTypes = {
  buttonName: PropTypes.string.isRequired,
};