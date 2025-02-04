/* 5. Capitalize First Letter of Each Word

Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word into upper case.
Example string : 'the quick brown fox'
Expected Output : 'The Quick Brown Fox ' */

function capitalize(aString) {

  let capArr = [];

  if (typeof(aString) === 'string') {
    let newArr = aString.split(' ');
    newArr.forEach(el => {
      let capWordsArr = el[0].toUpperCase() + el.slice(1,);
     capArr.push(capWordsArr);
    });
  }
  else {
    return false;
  }
  return capArr.join(" ");
}

console.log(capitalize('the quick brown fox'));