import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import calculate from '../logic/calculate';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.props = {
      total: null,
      next: null,
      operation: null,
    };
  


this.handleClick = buttonName => {
  const {total,next,operation} = calculate(this.state, buttonName);
  this.setState({
    total,
    next,
    operation,
  });
};
}



export default App;