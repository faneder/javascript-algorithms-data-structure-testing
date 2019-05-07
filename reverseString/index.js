// Given a string, return a new string with the reversed order of characters

const ReverseString = (str) => {
  if (!str || typeof str != 'string') {
    throw 'param need be string';
  }

  return [...str].reduce((acc, cur) => cur + acc, '');
}

// const ReverseString = (str) =>{
//   let reverseStr = '';

//   for (let i = str.length - 1; i >= 0 ; i--) {
//     reverseStr += str[i];
//   }

//   return reverseStr;
// }

// const ReverseString = str => [...str].reverse().join('');

// const ReverseString = (str) =>{
//   let reverseStr = '';

//   for (let s of str) {
//     reverseStr = s + reverseStr;
//   }

//   return reverseStr;
// }

module.exports = ReverseString;
