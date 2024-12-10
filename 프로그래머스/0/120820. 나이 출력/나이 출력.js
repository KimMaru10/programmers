function solution(age) {
    var answer = 2022;
    for(i = 1 ; i< age; age--){
        answer -= 1;
    }
    return answer;
}