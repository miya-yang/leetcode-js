function canPermutePalindrome(s: string): boolean {
    const map: Object = {};
    s.split('').forEach(item => {
        if (map[item]) {
            delete map[item];
        } else {
            map[item] = true;
        }
    });
    return Object.keys(map).length <= 1;
};