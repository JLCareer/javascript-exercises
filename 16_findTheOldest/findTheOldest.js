const findTheOldest = function(arr) {
    const currentYear = new Date().getFullYear()

    let oldest = arr[0];

    let oldestAge = (oldest.yearOfDeath === undefined)?currentYear - oldest.yearOfBirth: oldest.yearOfDeath - oldest.yearOfBirth;
    let objAge;
    for(obj of arr){
        objAge = (obj.yearOfDeath === undefined)?currentYear - obj.yearOfBirth: obj.yearOfDeath - obj.yearOfBirth;
        if(objAge > oldestAge){
            oldestAge = objAge;
            oldest = obj;
        }
    }
    
    return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
