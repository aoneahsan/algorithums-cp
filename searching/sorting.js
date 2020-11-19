// Bobble Sort
// function boobleSort(arr) {
//   console.log("arr = ", arr);
//   console.log("arr length = ", arr.length);
//   let noSwap = true;
//   for (let i = arr.length; i > 0; i--) {
//     console.log("***********************");
//     for (let j = 0; j < i - 1; j++) {
//       console.log(
//         "i = ",
//         i,
//         ", j = ",
//         j,
//         ", arr[j] = ",
//         arr[j],
//         ", arr[j+1] = ",
//         arr[j + 1],
//         ", arr[j] > arr[j+1] = ",
//         arr[j] > arr[j + 1]
//       );
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         noSwap = false;
//       }
//     }
//     if (noSwap) {
//       break;
//     }
//   }
//   return arr;
// }

// // console.log(boobleSort([1, 1, 2, 31, 43, 222]));
// console.log(boobleSort([12, 1, 121, 331, 3, 22]));

// // Selection Sort

// function selectionSort(arr) {
//   console.log("arr = ", arr);
//   console.log("arr length = ", arr.length);
//   let noSwap = true;
//   for (let i = 0; i < arr.length; i++) {
//     let lowestEntityIndex = i;
//     console.log("***********************");
//     for (let j = i + 1; j < arr.length; j++) {
//       console.log(
//         "i = ",
//         i,
//         ", j = ",
//         j,
//         ", lowestEntityIndex = ",
//         lowestEntityIndex,
//         ", arr[lowestEntityIndex] = ",
//         arr[lowestEntityIndex],
//         ", arr[j] = ",
//         arr[j],
//         ", arr[lowestEntityIndex] > arr[j+i] = ",
//         arr[lowestEntityIndex] > arr[j]
//       );
//       if (arr[lowestEntityIndex] > arr[j]) {
//         lowestEntityIndex = j;
//       }
//     }
//     if (i != lowestEntityIndex) {
//       console.log("i != lowestEntityIndex ", i != lowestEntityIndex);
//       [arr[i], arr[lowestEntityIndex]] = [arr[lowestEntityIndex], arr[i]];
//       noSwap = false;
//     }
//     console.log("noSwap = ", noSwap);
//     if (noSwap) {
//       break;
//     }
//     console.log("arr = ", arr);
//   }
//   return arr;
// }

// // console.log(selectionSort([1, 1, 2, 31, 43, 222]));
// console.log(selectionSort([12, 1, 121, 331, 3, 22]));

// insertion Sort

// function insertionSort(arr) {
//   console.log("arr = ", arr);
//   console.log("arr length = ", arr.length);
//   let noSwap = true;
//   for (let i = 1; i < arr.length; i++) {
//     console.log("***********************");
//     let currentLowest = arr[i];
//     for (var j = i - 1; j > -1 && arr[j] > currentLowest; j--) {
//       console.log("i = ", i, ", j = ", j);
//       arr[j + 1] = arr[j];
//     }
//     arr[j + 1] = currentLowest;
//     if (i != j) {
//       console.log("i != j ", i != j);
//       [arr[i], arr[i]] = [arr[i], arr[i]];
//       noSwap = false;
//     }
//     console.log("noSwap = ", noSwap);
//     if (noSwap) {
//       break;
//     }
//     console.log("arr = ", arr);
//   }
//   return arr;
// }

// // console.log(insertionSort([1, 1, 2, 31, 43, 222]));
// console.log(insertionSort([121, 1, 121, 331, 3, 22]));

// merge two sorted arrays

function mergeSortedArrays(arr1, arr2) {
  let result = [];
  let arr1Index = 0;
  let arr2Index = 0;
  while (arr1Index < arr1.length && arr2Index < arr2.length) {
    if (arr1[arr1Index] < arr2[arr2Index]) {
      result.push(arr1[arr1Index]);
      arr1Index++;
    } else {
      result.push(arr2[arr2Index]);
      arr2Index++;
    }
    console.log("***************************");
    console.log(result);
  }
  console.log(
    "arr1Index = ",
    arr1Index,
    "arr1.length - 1 = ",
    arr1.length - 1,
    "arr1Index != arr1.length - 1 = ",
    arr1Index != arr1.length - 1
  );
  console.log(
    "arr2Index = ",
    arr2Index,
    "arr2.length - 1 = ",
    arr2.length - 1,
    "arr2Index != arr2.length - 1 = ",
    arr2Index != arr2.length - 1
  );
  if (arr1Index != arr1.length) {
    for (let k = arr1Index; k < arr1.length; k++) {
      result.push(arr1[k]);
    }
  }
  if (arr2Index != arr2.length) {
    for (let l = arr2Index; l < arr2.length; l++) {
      result.push(arr2[l]);
    }
  }
  return result;
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return mergeSortedArrays(left, right);
}

console.log(
  mergeSort([
    1,
    44,
    55,
    2,
    10,
    12,
    13,
    1,
    44,
    55,
    2,
    10,
    12,
    13,
    45,
    56,
    44,
    55,
    2,
    10,
    12,
    13,
    45,
    56,
  ])
);
