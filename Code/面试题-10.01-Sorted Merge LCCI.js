/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */
 var merge = function(A, m, B, n) {
    let indexA = m - 1;
    let indexB = n - 1;
    let index = A.length - 1;
    
    while (indexA >= 0 && indexB >= 0) {
        // Array A > Array B
        if (A[indexA] > B[indexB]) {
            A[index] = A[indexA];
            indexA--;
        } else {
            // Array A <= Array B
            A[index] = B[indexB];
            indexB--;
        }
        index--;
    }
    
    if (indexA < 0) {
        // Array A is empty, unshift B to A.
        while (indexB >= 0) {
            A[index] = B[indexB];
            index--;
            indexB--;
        }
    }
};