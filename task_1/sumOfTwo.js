function sumOfTwo(array1, array2, x) {
    for(let i = 0; i<array1.length; ++i){
        let dif = x - array1[i];
        if(array2.some((item)=>item === dif)) 
        return true;
    }
    return false;
}
// test
let array1 = [1,2,3,4,5];
let array2 = [100, 200, 300];
x = 103;
// => true
console.log(''+sumOfTwo(array1, array2, x));

array1 = [1,2,3,4,5];
array2 = [100, 200, 300];
x = 107;
// => false
console.log(''+sumOfTwo(array1, array2, x));