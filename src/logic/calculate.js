import './operate'
const calculate = (dataObjet,buttonName) => {
    let {total,next,operation} = dataObjet;
    const prevTotal = total;

    
  if (['+/-', '/', 'x', '*', '+', '-', '%', '='].includes(buttonName)) {
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

}