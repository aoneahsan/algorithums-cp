// Bubble Sort



// Merge Sort
function mergeTwoArrays(arr1, arr2) {
    let index1 = 0;
    let index2 = 0;
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    let resultArray = [];
    while(index1 < arr1Length && index2 < arr2Length) {
        if (arr1[index1] < arr2[index2]) {
            resultArray.push(arr1[index1]);
            index1++;
        }
        else {
            resultArray.push(arr2[index2]);
            index2++;
        }
    }
    while(index1 < arr1Length) {
        resultArray.push(arr1[index1]);
        index1++;
    }
    while(index2 < arr2Length) {
        resultArray.push(arr2[index2]);
        index2++;
    }
    return resultArray;
}

function mergeSort(arr) {
    if(arr.length <= 1) return arr;
    const middle = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, middle));
    const right = mergeSort(arr.slice(middle));
    return mergeTwoArrays(left, right);
}

// array = [2,234,5,6,7,2,5,8,3,43,6,8,9,9,4,3,356,6,75,8,234,4,45,335,3,5,6,8,9,4,3,2,2,5,-2,-3323,2323,32,3,2,4,5,6, 2,234,5,6,7,2,5,8,3,43,-11111];
// console.log("Starting.....");
// console.log(mergeSort(array));
// console.log("Ended.....");

// ***************************************************************************
// ***************************************************************************
// ***************************************************************************

// Quick Sort
function swap(arr, index1, index2) {
    return [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
}

function pivot(arr, pivotIndex=0) {
    let pivot = arr[pivotIndex];
    swapIndex = pivotIndex;
    for(let i = pivotIndex + 1; i < arr.length; i++) {
        if (pivot > arr[i]) {
            swapIndex++;
            swap(arr, swapIndex, i);
        }
    }
    swap(arr, pivotIndex, swapIndex);
    return swapIndex;
}

function quickSort(arr, left = 0, right=arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left);

        // left side
        quickSort(arr, left, pivotIndex - 1);

        // right side
        quickSort(arr, pivotIndex+1, right);
    }
    return arr;
}

// const array = Array.apply(null, {length: 100}).map(Function.call, Math.random);
// console.log(quickSort(array));



// ***************************************************************************
// ***************************************************************************
// ***************************************************************************

// Radix Sort

function getDigit(num, place) {
    return Math.floor(Math.abs(num)/Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if (num === 0) {
        return 1;
    }
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function maxDigitsLength(nums) {
    let maxDigitsLength = 0;
    for (let index = 0; index < nums.length; index++) {
        maxDigitsLength = Math.max(maxDigitsLength, digitCount(nums[index]));
    }
    return maxDigitsLength;
}

function radixSort(intArr) {
    const loopLimit = maxDigitsLength(intArr);
    for (let i = 0; i < loopLimit; i++) {
        let digitArrays = Array.from({length: 10}, () => []);
        for (let j = 0; j < intArr.length; j++) {
            digitArrays[getDigit(intArr[j], i)].push(intArr[j]);
        }
        intArr = [].concat(...digitArrays);
    }
    return intArr;
}

console.log(radixSort([123,123,12312,312312312,31231231312312313,1231233,22,3,3,33,123]));

// console.log(getDigit(12345, 0));