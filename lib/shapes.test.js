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
    shapeColor = "blue";
    const shapeString = `<circle  cx="100" cy="100" r="75" fill="${shapeColor}" />`
    const expected    = `<circle  cx="100" cy="100" r="75" fill="blue" />`
    expect(shapeString).toEqual(expected);
    }
    
  )});

  

  describe('Triangle', () => {
    it('should render a green triangle', () => {
      shapeColor = "green";
      const shapeString = `<polygon points="100, 1 200, 152 0, 150" fill="${shapeColor}"/>`
      const expected    = `<polygon points="100, 1 200, 152 0, 150" fill="green"/>`
      expect(shapeString).toEqual(expected);
      }
      
    )});


    describe('Square', () => {
      it('should render a white square', () => {
        shapeColor = "white";
        const shapeString = `<rect x="0" y="0" width="200" height="175"  fill="${shapeColor}"/>`
        const expected    = `<rect x="0" y="0" width="200" height="175"  fill="white"/>`
        expect(shapeString).toEqual(expected);
        }
        
      )});


      describe('Square', () => {
        it('should render a white square', () => {
          shapeColor = "white";
          const shapeString = `<rect x="0" y="0" width="200" height="175"  fill="${shapeColor}"/>`
          const expected    = `<rect x="0" y="0" width="200" height="175"  fill="white"/>`
          expect(shapeString).toEqual(expected);
          }
          
        )});





        describe('Square', () => {
          it('should render a white square', () => {
            shapeColor = "lkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkksddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaddddddddddddddddddddddddddddddddddddddkkkkkkdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddkkkkkkkddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk;;";
            logoText = "hello";
            const shapeString = <text text-anchor="middle" alignment-baseline="middle" font-size="3em" x="100" y="100" fill="${data.textColor}">${data.logoText}</text>
            const expected    = `<rect x="0" y="0" width="200" height="175"  fill="white"/>`
            expect(shapeString).toEqual(expected);
            }
            
          )});


<text text-anchor="middle" alignment-baseline="middle" font-size="3em" x="100" y="100" fill="${data.textColor}">${data.logoText}</text>
        












  // describe('Triangle', () => {
  //   it('should render a red triangle', () => {
  //     shapeColor = "red";

  //     `<polygon points="100, 1 200, 152 0, 150" fill=${this.shapeColor}/>`
  //     const shapeString = `<polygon points="100, 1 200, 152 0, 150" fill="${this.shapeColor}"/>`
  //     const expected    = `<polygon points="100, 1 200, 152 0, 150" fill="red"/>`
  //     expect(shapeString).toEqual(expected);
  
  //   });

    

    // describe('Circle', () => {
    //   it('should render a blue circle', () => {
    //     shapeColor = "blue";
    //     const shapeString = `<circle  cx="100" cy="100" r="75" fill="${shapeColor}" />`
    //     const expected    = `<circle  cx="100" cy="100" r="75" fill="blue" />`
    //     expect(shapeString).toEqual(expected);
    
    //   });
    





// describe('Square', () => {
//   it('should render a blue square', () => {
//     const shape = new Square();
//     const expected = `<rect x="100" y="100" width="100" height="100" fill="blue" />`
//     shape.setColor("blue");
//     expect(shape.render()).toEqual(expected);

//   });
// });





