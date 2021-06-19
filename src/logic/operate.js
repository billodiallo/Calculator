import Big from 'big.js';

const operate = (numberone,numbertwo,operation) => {
    const firstValue = Big(numberone);
    const secondValue = Big(numbertwo);
    let result = null;

    if (operation == '-') {
        return firstValue.minus(secondValue).toFixed(3);

    }
    if  (operation == '+') {
        return firstValue.plus(secondValue).toFixed(3);
    }

    if (operation == 'x') {
        return firstValue.times(secondValue).toFixed(3);
    }

    if (operation === '/') {
        if (parseInt(secondValue, 10) === 0) { return "You can't divide a number by zero!"; }
        result = firstValue.div(secondValue).toFixed(3);
      }
    
      result = parseFloat(result);
      return result;
    };


export default operate;
