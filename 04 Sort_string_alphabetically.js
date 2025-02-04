/* 4. Sort String Alphabetically

Write a JavaScript function that returns a string that has letters in alphabetical order.
Example string : 'webmaster'
Expected Output : 'abeemrstw'
Assume punctuation and numbers symbols are not included in the passed string. */


function sortString(aStr) {
  if (typeof(aStr) === 'string') {
    let myArr = aStr.split('');
    let sortedArr = myArr.sort();
    return sortedArr.join('');
  }
  else {
    return false;
  }
}

console.log(sortString('webmaster'));