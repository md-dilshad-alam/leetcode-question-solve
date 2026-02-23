

var isPalindrome = function(str) {
    let left = 0;
    let right = str.length -1;


    while (left < right) { 

    if (str[left] !== str[right]){
     return false;
     }
     left++;
     right--;
   
    }
     return true;
};
console.log('Example of palindrome number is:');

console.log(isPalindrome('abcsdd'));
console.log(isPalindrome('acca'));
console.log(isPalindrome('dilshad-alam'));
console.log(isPalindrome(121));
console.log(isPalindrome(123321));
