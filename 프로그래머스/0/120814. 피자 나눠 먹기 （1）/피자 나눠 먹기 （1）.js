function solution(n) {
    var answer = Math.floor(n/7);
    
    if(n<=answer*7){
        return answer;
    }else if(n < 7){
        return 1;
    }else{
        return answer+1
    }
    
    
}