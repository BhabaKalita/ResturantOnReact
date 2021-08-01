// FInd out the duplicates and remove from an array
/*
// let a = [1,2,3,4,2,3,1,9,3]
// console.log([...new Set(a)]);

let chars = [1,2,3,4,2,3,1,9,3]
let uniqueChars = chars.filter((c, index) => {
    return chars.indexOf(c) === index;
})
console.log(uniqueChars);
*/
// Find all the subsets from the array
/*
const getAllSubsets = arr => arr.reduce((set, value) => set.concat(set.map(sset => [value, ...sset])),[[]]);
console.log(getAllSubsets([1,2,3]));
*/

// const isPrime = num => {
//     for(let i = 2; i < num; i++)
//       if(num % i === 0) return false;
//     return num > 1;
//   }
//   console.log(isPrime(13))

// const isPrime = num => {
//     for(let i = 2, s = Math.sqrt(num); i <= s; i++)
//         if(num % i === 0) return false; 
//     return num > 1;
// }
// console.log(isPrime(13))

// Reverse an Integer
/*
const reverInt = (n) => {
    if(n<0)
    return -1*parseInt(n.toString().split('').reverse().join(''))
    return parseInt(n.toString().split('').reverse().join(''));
}
console.log(reverInt(-100))
*/
// FizzBuzz
/*
((num) => {
    for(let i = 1; i<100; i++){
        if(i%3==0 && i%5==0){
            console.log('Fizbuz')
        }
        else if(i%3==0){
            console.log('Fiz')            
        }
        else if(i%5==0){
            console.log('buz')            
        }
        else console.log(i);
    }
})()
*/

// for(let i = 1; i<101; i++)
//     if(i%15==0)
//     console.log('Fizzbuzz')
//     else if(i%3==0)
//     console.log('Fizz')
//     else if(i%5==0)
//     console.log('Buzz')
//     else console.log(i)

// Check palindrome in a String
/*
const chkPalindrome = (str) => {
    const arr = str.split('').reverse().join('');
    if(arr == str)
    console.log('palindrome')
   else console.log('not palindrome')
}
chkPalindrome("pop")
*/
// Palindrome Permutation

const getObj = (str) => {
    let obj = {}
    for(let i of str)
        (!obj[i]) ? obj[i]=1 : obj[i]++;
        return obj;    
}
const PalindromePermutation = (str) => {
    // removes the white spaces from between
    str = str.replace(/ +/g,"");

    const obj = getObj(str);

    if(str.length%2 === 1){
        // Return false if more than one odd number character

        let counter = 0;
        for(let i of str){
            if(obj[i]%2 === 1 || obj[i] === 1)
            counter++;
            if(counter>1)
            return false;
        }
    }
    else{
        for(let i of str){
            if(obj[i]%2 !== 0)
            return false;
        }
    }
    return true;
}
console.dir({
    test: PalindromePermutation("tact coa")
})