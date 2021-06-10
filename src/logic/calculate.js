import './operate'
const calculate = (dataObjet,buttonName) => {
    let {total,next,operation} = dataObjet;
    const prevTotal = total;

    
  if (['+/-', '/', 'x', '*', '+', '-', '%', '='].includes(buttonName)) {
    switch (buttonName) {
      case '=':
        total = operate(total, next, operation);
        break;

}