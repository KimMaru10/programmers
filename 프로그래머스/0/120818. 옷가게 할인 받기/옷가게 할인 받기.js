function solution(price) {
    var discount = 0;
    if(price >= 500000) discount = 20;
    else if(price >= 300000) discount = 10;
    else if(price >= 100000)discount = 5;
       
    return Math.floor(price * (1 - discount / 100));
}