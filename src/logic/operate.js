import Big from 'big.js';
const operate = (numberone,numbertwo,operation) => {
    const firstValue = Big(numberone);
    const secondValue = Big(numbertwo);
    let result = null;

    if (operation == '-') {
        return firstValue.minus(secondValue);

    }
    if  (operation == '+') {
        return firstValue.plus(secondValue);
    }

    if (operation == 'x') {
        return firstValue.times(secondValue);
    }

    if (operation == '%') {
        return firstValue.div(100);
    }

    if (operation === '/') {
        if (parseInt(secondValue, 10) === 0) 
        { return "You can't divide a number by zero"; }
        return firstValue.div(secondValue);
      }
    
      return null;
    };


export default operate;
