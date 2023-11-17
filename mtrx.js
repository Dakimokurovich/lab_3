class Matrix {
    constructor(rows) {
      this.rows = rows;
    }
  
    
    transpose() {
      const transposed = [];
      const rowCount = this.rows.length;
      const colCount = this.rows[0].length;
  
      for (let col = 0; col < colCount; col++) {
        transposed[col] = [];
        for (let row = 0; row < rowCount; row++) {
          transposed[col][row] = this.rows[row][col];
        }
      }
  
      return new Matrix(transposed);
    }
  }
  
  module.exports = Matrix;
  