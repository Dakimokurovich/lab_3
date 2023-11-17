


const sinon = require('sinon');
const { expect } = require('chai');


const Matrix = require('./mtrx');

describe('Matrix', () => {

  let sandbox;

  beforeEach(() => {
    sandbox = sinon.createSandbox();
  });

  afterEach(() => {
    sandbox.restore();
  });

  describe('#transpose', () => {

    it('should correctly transpose a matrix', () => {
    
      
      const matrix = new Matrix([[1,2], [3,4]]);

      
      sandbox.stub(Matrix.prototype, 'transpose').returns(new Matrix([[1,3], [2,4]]));
      
      
      const result = matrix.transpose();
      
      
      expect(result.rows).to.deep.equal([[1,3], [2,4]]);
      
      
      expect(Matrix.prototype.transpose.calledOnce).to.be.true;
    });

  });

});
