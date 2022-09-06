//ES5
    // function filterOutOdds() {
    //     var nums = Array.prototype.slice.call(arguments);
    //     return nums.filter(function(num) {
    //       return num % 2 === 0
    //     });
    //   }

//ES2015
const filterOutOdds = (...nums) => nums.filter((num) => num % 2 === 0);

//findMin
    function findMin(...values) {
        return Math.min(...values);
    };

//mergeObjects
    function mergeObjects(obj1, obj2) {
        return {...obj1, ...obj2};
    }

//doubleAndReturnArgs
    function doubleAndReturnArgs(arr, ...nums){
        for(let num of nums){
            num *= 2;
            arr.push(num);
        };
        return arr;
    }

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (...items) => {
    const newArr = items.slice('');
    newArr.splice((Math.floor(Math.random() * newArr.length)), 1);
    return newArr;
}



/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => {
    const extArr = [...array1, ...array2];
    return extArr;
};

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    const newObj = {...obj, [key] : val};
    return newObj;
};

/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    const newObj = {...obj};
    delete newObj[key];
    return newObj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => {
    const newObj = {...obj1, ...obj2};
    return newObj;
};

/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    const newObj = {...obj, [key] : val};
    return newObj;
};