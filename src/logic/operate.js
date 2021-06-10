import Big from 'big.js';
const operate = (numberone,numbertwo,operation) => {
    const firstValue = Big(numberone);
    const secondValue = Big(numbertwo);

    if (operation == '-') {
        return firstValue.minus(secondValue);

    }
    if  (operation == '+') {
        return firstValue.plus(secondValue);
    }

    if (operation == 'x') {
        return firstValue.times(secondValue);
    }

}

export default operate;
