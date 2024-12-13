function solution(numbers, num1, num2) {
    return  numbers.filter((element, index)=>num1 <= index && index <=num2);
}

