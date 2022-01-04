/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    let line = [triangle[0][0]];
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i < triangle.length; i++) {
        let prevLine = line;
        let curLine = triangle[i];
        let tempLine = [];
        for (let j = 0; j < curLine.length; j++) {
            if (j === 0) {
                tempLine[j] = prevLine[j] + curLine[j];
            } else if (j === curLine.length - 1) {
                tempLine[j] = prevLine[j - 1] + curLine[j];
            } else {
                tempLine[j] = Math.min(prevLine[j - 1], prevLine[j]) + curLine[j];
            }
            if (i === triangle.length - 1) {
                min = Math.min(min, tempLine[j]);
            }
        }
        line = tempLine;
    }
    return triangle.length === 1 ? triangle[0][0] : min;
};
