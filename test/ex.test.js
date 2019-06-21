// Adding sum
// Multiplying mul
// Subtracting sub
// Dividing div

const sum = (a, b) => a + b;

describe('Test match', () => {
  it('add', () => {
    const num1 = 2;
    const num2 = 4;

    expect(sum(num1, num2)).toBe(num1 + num2);
  });
});
