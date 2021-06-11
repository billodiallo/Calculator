import operate from './operate';

const calculate = (dataObj, buttonName) => {
  let { total, next, operation } = dataObj;
const numberArr = ['0','1','2','3','4','5','6','7','8','9']
const operationArr = ['+/-', '/', 'x', '*', '+', '-', '%', '=']

    switch (buttonName) {
      case 'AC':
        total = null;
        next = null;
        operation = null;
        break;

      case '+/-':
        next *= -1;
        total *= -1;
        break;

      case '.':
        if (next !== null) {
          next += '.';
        }
        break;
      default:
        break;

      case '%':
         if (next === null) {
            next = String(total / 100);
          } else {
            next = String(next / 100);
          }
          break;
      }

      

  return {
    prevTotal,
    total,
    next,
    operation,
  };


export default calculate;