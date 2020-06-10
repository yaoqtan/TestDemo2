const dropWhile = (arr,func) => {
        while (arr.length > 0 && !func(arr[0])){
            arr = arr.slice(1);
        }

        return arr;
    };

console.log(dropWhile([1,5,2,3,4], n => n >= 3));

// [3,4]




function validateUpperCase(val) {
    const reg = /^[A-Z]+$/;
    return reg.test(val);
}