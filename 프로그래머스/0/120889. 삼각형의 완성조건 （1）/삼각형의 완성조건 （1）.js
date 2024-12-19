function solution(sides) {
    var maxValue = Math.max(...sides);
    var sum = sides.reduce((acc, val) => acc + val, 0) - maxValue;
    return maxValue < sum ? 1 : 2;
}