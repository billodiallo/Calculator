import React from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';


const calculate = (a, b) => a + b;

const App = () => (
  <>
    <Display result={calculate(0, 0).toString()} />
    <ButtonPanel />
  </>
);

export default App;