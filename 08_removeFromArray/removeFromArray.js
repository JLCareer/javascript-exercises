const removeFromArray = function(arr, ...removeItems) {    
    return arr.filter(item => !removeItems.includes(item))
};

// Do not edit below this line
module.exports = removeFromArray;
