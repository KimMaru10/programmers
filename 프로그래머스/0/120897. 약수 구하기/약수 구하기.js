function solution(n) {
    var answer = [];
    var index = 0;
    while(index <= n){
        if(n % index === 0){
            answer.push(index);
        } 
      index++;
    }
    return answer;
}