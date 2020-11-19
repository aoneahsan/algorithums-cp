console.log("*******************************");
console.log("Searching Patterns");
console.log("*******************************");

// function linerSearch(array, elem) {
//   for (let index = 0; index < array.length; index++) {
//     if (elem == array[index]) {
//       return index;
//     }
//   }
//   return -1;
// }

// var arr = [1, 2, 3, 32, 4, 5, 7, 8];
// console.log(linerSearch(arr, 133));

// Binary Search

// function binarySearch(array, elem) {
//   var start = 0;
//   var end = array.length - 1;
//   var middle = Math.floor((start + end) / 2);
//   while (array[middle] !== elem && middle != end) {
//     console.log("****************** start ******************");
//     console.log(
//       "start = ",
//       start,
//       "end = ",
//       end,
//       "middle = ",
//       middle,
//       "array[middle] = ",
//       array[middle],
//       "elem = ",
//       elem,
//       "elem > array[middle] = ",
//       elem > array[middle]
//     );
//     if (elem < array[middle]) {
//       end = middle - 1;
//     } else {
//       start = middle + 1;
//     }
//     middle = Math.floor((start + end) / 2);
//     console.log("****************** end ******************");
//   }
//   if (array[middle] != elem) {
//     return "Not Found";
//   } else {
//     return "Index of Number in given array = " +  middle;
//   }
// }

// var arr = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(binarySearch(arr, prompt("Enter Number")));

// Naive Search Pattern (just a random name for search a string in aother string)

function searchString(STR1, STR2) {
  if (STR1.length < STR2.length) {
    alert("Second shoud be less than or equal to first string.");
  }
  const str1 = STR1.toLowerCase();
  const str2 = STR2.toLowerCase();
  let matchFound = 0;
  let indexex = [];
  console.log(
    "str1 = ",
    str1,
    "str2 = ",
    str2,
    "str1.length = ",
    str1.length,
    "str2.length = ",
    str2.length,
    "matchFound = ",
    matchFound,
    "indexex = ",
    indexex.toString()
  );
  for (let j = 0; j < str1.length - str2.length + 1; j++) {
    console.log("********************");
    for (let i = 0; i < str2.length; i++) {
      console.log(
        "j = ",
        j,
        ", i = ",
        i,
        ", str1[j + i] = ",
        str1[j + i],
        ", str2[i] = ",
        str2[i],
        ", str1[j + i] !== str2[i] = ",
        str1[j + i] !== str2[i]
      );
      if (str1[j + i] !== str2[i]) {
        break;
      }
      if (i === str2.length - 1) {
        matchFound++;
        indexex.push(j);
      }
    }
  }
  // return matchFound;
  return "matchFound = " + matchFound + "indexex = " + indexex.toString();
}

console.log(searchString("ok asd SDAGJ HAha asd byebyebye by e", "bye"));

// prompt("Enter First String (Longer)."),
// prompt("Enter Second String (should be lower than first string).")
