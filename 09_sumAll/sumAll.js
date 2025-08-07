const sumAll = function(arg1, arg2) {
    if(typeof arg1 == "number" && typeof arg2 == "number"){
        if(arg1 < 0 || arg2 < 0 || Math.floor(arg1) != arg1 || Math.floor(arg2) != arg2)
        {
            return "ERROR";
        }
        let startInt = arg1, endInt = arg2, sumTotal = 0;
        
        if(arg1 > arg2){
            startInt = arg2;
            endInt = arg1;
        } 
    
        for(let i = startInt; i <= endInt; i++){
            sumTotal += i;
        }

        return sumTotal;

    }else
    {
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
