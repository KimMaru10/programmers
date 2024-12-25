function solution(my_string) {
    var answer = [...my_string].map((element)=> element === element.toUpperCase() ? element.toLowerCase() : element.toUpperCase());
    return answer.join("");
}