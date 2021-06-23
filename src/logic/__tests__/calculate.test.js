import  calculate from '../calculate';

describe('Calculate Logic tests', () => {
    let currentState;
    
    beforeEach(() => {
      currentState = {
        total: '5',
        next: '6',
        operation: '+',
      };
});
it('should return null for total, for next and for operation when AC is clicked', () => {
    const result = calculate(currentState, 'AC');
    expect(result).toEqual({
      total: null,
      next: null,
      operation: null,
    });
  });
});