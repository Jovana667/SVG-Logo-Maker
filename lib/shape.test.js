const { Circle, Triangle, Square } = require('./shapes');

describe('Shape classes', () => {
  test('Circle render method', () => {
    const circle = new Circle();
    circle.setColor('blue');
    expect(circle.render()).toEqual('<circle cx="150" cy="100" r="80" fill="blue" />');
  });

  test('Triangle render method', () => {
    const triangle = new Triangle();
    triangle.setColor('red');
    expect(triangle.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="red" />');
  });

  test('Square render method', () => {
    const square = new Square();
    square.setColor('green');
    expect(square.render()).toEqual('<rect x="90" y="40" width="120" height="120" fill="green" />');
  });
});