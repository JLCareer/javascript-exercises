const fibonacci = function(input) {
    let num = input;
    
    if(typeof(input) == "string"){
        num = parseInt(input)
    }
    
    if(num < 0){
        return "OOPS";
    }

    const fibonacciArr = [0, 1];
    
    for(let i = 2; i <= num; i++){
        fibonacciArr.push(fibonacciArr[i - 1] + fibonacciArr[i - 2]);
    }

    return fibonacciArr[num];
};

// Do not edit below this line
module.exports = fibonacci;
