import operate from "../operate";

describe('Operation Test', () => {
    let firstNumber ;
    let secondNumber;

    beforeEach( () => {
    firstNumber = 500;
    secondNumber = 15;
    });

    it('should return 33.334, if "/" is given as operator', () => {
        const result = operate(firstNumber, secondNumber, '/');
        expect(result).toEqual(33.333);
      });

    });
