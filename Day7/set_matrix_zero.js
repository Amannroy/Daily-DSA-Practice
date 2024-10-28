function setMatrixZero(matrix) {
    let m = matrix.length;
    let n = matrix[0].length;

    let firstRow = false;
    let firstColumn = false;

    // Check if the first row contains zero
    for (let j = 0; j < n; j++) {
        if (matrix[0][j] === 0) {
            firstRow = true;
            break;
        }
    }

    // Check if the first column contains zero
    for (let i = 0; i < m; i++) {
        if (matrix[i][0] === 0) {
            firstColumn = true;
            break;
        }
    }

    // Use the first row and column to mark zeroes
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][j] === 0) {
                matrix[i][0] = 0;
                matrix[0][j] = 0;
            }
        }
    }

    // Set matrix elements to zero based on markers in the first row and column
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (matrix[i][0] === 0 || matrix[0][j] === 0) {
                matrix[i][j] = 0;
            }
        }
    }

    // If first row needs to be set to zero
    if (firstRow) {
        for (let j = 0; j < n; j++) {
            matrix[0][j] = 0;
        }
    }

    // If first column needs to be set to zero
    if (firstColumn) {
        for (let i = 0; i < m; i++) {
            matrix[i][0] = 0;
        }
    }

    return matrix; 
}

// Example usage:
let matrix = [[1, 1, 1], [1, 0, 1], [1, 1, 1]];
console.log(setMatrixZero(matrix));  //[ [ 1, 0, 1 ], [ 0, 0, 0 ], [ 1, 0, 1 ] ]

// TC = O(m * n)
// SC = O(1)
