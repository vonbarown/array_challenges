//Write a function add that adds an element to the end of an array. However, the element should only be added if it is not already in the array. add([1, 2], 3) should return [1, 2, 3] and add([1, 2], 2) should return [1, 2].
let arr =  [1,4,7,3,9,10,];
let element = 6;
let n;
// for (let i = 0; i < arr.length; i++) {
// //  console.log(i);
// let n //= arr.includes(element);
//       if (arr.includes(element)){ //// using th .includes method to check if th element is already prsent in arr
//         console.log('This is a duplicate');
//         //console.log(arr);
//         break; //// using break so that the code knows to stop and move on to the else statement
//       } else {
//           arr.push(element); //// using the .push method to add non duplicate element to end of array
//           console.log(arr);
//           break;
//       }
// }

// converting the for loop into a while loop
let j=0
while (j < arr.length) {
    if (arr.includes(element)){
      continue;
    } else {
      arr.push(element)
      console.log(arr);
    }
}
