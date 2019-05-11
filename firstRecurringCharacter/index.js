// O(n)
const firstRecurringCharacter = (input) => {
  const map = {};

  for (let x of input) {
    map[x] = map[x] + 1 || 1
    if (map[x] >= 2) {
      return x
    }
  }

  return undefined;
}

// const firstRecurringCharacter = (input) => {
//   const map = {};

//   for (let x of input) {
//     if (!map[x]) {
//       map[x] = x;
//     } else {
//       return x;
//     }
//   }

//   return undefined;
// }

// bad (o^2)
// const firstRecurringCharacter = (input) => {
//   let current_recur = Number.POSITIVE_INFINITY;
//   for (let i = 0; i < input.length; i++) {
//     for (let j = i + 1; j < input.length; j++) {
//       if (input[i] === input[j]){
//         if (j < current_recur){
//           current_recur = j;
//         }
//       }
//     }
//   }

//   if (current_recur < Number.POSITIVE_INFINITY){
//     return input[current_recur]; 
//   }
//   return undefined; 
// }

// will only return first recurrent
// const firstRecurringCharacter = (input) => {
//   // for (let i = 0; i <= input.length; i++) {
//   //   for (let j = i + 1; i <= input.length; j++) {
//   //     if (input[i] === input[j]) {
//   //       return input[i];
//   //     }
//   //   }
//   // }
//   return undefined;
// }

module.exports = firstRecurringCharacter;