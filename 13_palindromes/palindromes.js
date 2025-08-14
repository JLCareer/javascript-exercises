const palindromes = function (str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for(let i = 0; i < cleanedStr.length; i++){
        if(cleanedStr[i] !== cleanedStr[cleanedStr.length - i - 1]){
            return false;
        }
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
