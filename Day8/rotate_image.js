// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [[7,4,1],[8,5,2],[9,6,3]]

var rotate = function(matrix) {
    for(let i=0;i<matrix.length;i++){
        for(let j=i;j<matrix[0].length;j++){
            let temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let i=0;i<matrix.length;i++){
        reverArr(matrix[i]);
    }
    return matrix;
}
function reverArr(arr){
    let left = 0;
    let right = arr.length-1;
    while(left < right){
        [arr[left],arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
}

console.log(rotate([[1,2,3],[4,5,6],[7,8,9]])); // [ [ 7, 4, 1 ], [ 8, 5, 2 ], [ 9, 6, 3 ] ]

// TC = O(n^2)
// SC = O(1)
