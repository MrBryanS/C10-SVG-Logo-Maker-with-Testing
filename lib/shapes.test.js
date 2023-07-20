const { Triangle, Square, Circle } = require("./shape")

// console.log(Circle)


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


// A testing suite is created.
// describe('Shape', () => {
//     describe('Triangle', () => {
//       it('should render a blue triangle', () => {
//         const shape = new Triangle();
//         const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
//         shape.setColor("blue");
//         expect(shape.render()).toEqual(expected);

//       });

//     });

describe('Circle', () => {
  it('should render a blue circle', () => {
    const shape = new Circle();
    const expected = `<circle cx="35" cy="35" r="30" fill="blue" />`
    shape.setColor("blue");
    expect(shape.render()).toEqual(expected);

  });

});

describe('Square', () => {
  it('should render a blue square', () => {
    const shape = new Square();
    const expected = `<rect x="100" y="100" width="100" height="100" fill="blue" />`
    shape.setColor("blue");
    expect(shape.render()).toEqual(expected);

  });
});






