/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const data = ['a', 'e', 'i', 'o', 'u'];
    s = s.split('');
    let left = 0;
    let right = s.length - 1;
    let isLeft = false;
    let isRight = false;
    while (left < right) {
        if (isLeft || data.includes(s[left]) || data.includes(s[left].toLowerCase())) {
            isLeft = true;
        } else {
            left++;
        }
        if (isRight || data.includes(s[right]) || data.includes(s[right].toLowerCase())) {
            isRight = true;
        } else {
            right--;
        }
        if (isLeft && isRight) {
            [s[left], s[right]] = [s[right], s[left]];
            isLeft = false;
            isRight = false;
            left++;
            right--;
        }
    }
    return s.join('');
};