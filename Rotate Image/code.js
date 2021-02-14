/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
 
    let n = matrix.length 
    //rows become columns and columns become rows  
    for(let i = 0; i<n; i++){
        for(let j = i; j< n; j++){
            let temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix [j][i] = temp
        }
    }
   

}; 