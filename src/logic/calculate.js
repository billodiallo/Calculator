import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;
  const prevTotal = total;
const numberArr = ['0','1','2','3','4','5','6','7','8','9']
const operationArr = ['+/-', '/', 'x', '*', '+', '-', '%', '=']

    switch (buttonName) {
      case '=':
        total = operate(total, next, operation);
        break;
      case 'AC':
        total = '0';
        next = null;
        operation = null;
        break;
      case '+/-':
        total *= -1;
        next *= -1;
        break;
      case '/': case 'x': case '+': case '-': case '%':
        operation = buttonName;
        break;
      case '.':
        next = +buttonName;
        break;
      default:
        total = null;
        break;
    }
  } 
  else {
    next = next.toString() + buttonName.toString();
    next = next.toNumber();
  }

  return {
    prevTotal,
    total,
    next,
    operation,
  };


export default calculate;