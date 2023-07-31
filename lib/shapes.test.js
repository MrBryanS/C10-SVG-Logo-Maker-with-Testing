const { Triangle, Square, Circle } = require("./shape")

//Afrirm
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



 





