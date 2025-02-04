/* 2. Check Palindrome

Write a JavaScript function that checks whether a passed string is a palindrome or not?
A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run. */


function palindrome(aStr) {
  if (typeof(aStr) === 'string') {
    // regex to delete spaces in string
    let parsedStr = aStr.replace(/\s+/g, '');
    // reverse string
    let reverseStr = parsedStr.split("").reverse().join("");
    // compare two strings combines with ternary operator
    return JSON.stringify(parsedStr) === JSON.stringify(reverseStr)? true : false;
  }
  else {
    return false;
  }
}

console.log(palindrome('eric'));
console.log(palindrome('madam'));
console.log(palindrome('nurses run'));