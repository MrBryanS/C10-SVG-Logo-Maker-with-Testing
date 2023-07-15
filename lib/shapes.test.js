const {Triangle, Square, Circle} = require("./shape")

console.log(Triangle)


// const shape = new Triangle();
// shape.setColor("blue");
// expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');


// A testing suite for Arithmetic is created.
describe('Shape', () => {
    describe('Triangle', () => {
      it('should render a blue triangle', () => {
        const shape = new Triangle();
        const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        shape.setColor("blue");
        expect(shape.render()).toEqual(expected);
        
      });
    
    });

    describe('Circle', () => {
        it('should render a blue triangle', () => {
          const shape = new Circle();
          const expected = '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
          shape.setColor("blue");
          expect(shape.render()).toEqual(expected);
          
        });
      
      });




  });