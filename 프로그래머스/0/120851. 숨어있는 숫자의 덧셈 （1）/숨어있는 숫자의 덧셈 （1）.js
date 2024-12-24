function solution(my_string) {
    var regex = /[^0-9]/g;
    var result = my_string.replace(regex, ""); 
    var newArr = [...result].map(Number);
    var sum = 0;
    newArr.forEach(function(number){
        sum += number;
    })
    return sum;
    
}