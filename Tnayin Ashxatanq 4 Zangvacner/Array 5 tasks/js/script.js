// Function for all
function getArray() {
    let arr = [];
    count = +prompt('grel qanaky');
    for(let i = 0; i < count; i++) {
        number = +prompt('grel tver');
        arr.push(number);
    } 
    return arr;
} 
getArray();

// Xndir 1 - Gtnel mecaguyn tarr
// function findMax() {
//    let arr = getArray();
//     let max = arr[0];
//     for(let i = 1; i < arr.length ; i++) {
//         if(max < arr[i]) {
//             max = arr[i];
//         }
//     } 
//     return max;
// }
// alert(findMax());

// Xndir 2 - Gtnel poqraguyn tarr
// function findMin() {
//     let arr = getArray();
//     let min = arr[0];
//     for(let i = 1; i < arr.length ; i++) {
//         if(min > arr[i]) {
//             min = arr[i];
//         }
//     }
//     return min;
// }
// alert(findMin());

// Xndir 3 - Hanel krknvox elementnery
// function delelem() {
//    let arr = getArray();
//    let arkx = [];
//         for(let i = 0; i < arr.length; i++) {
//            let index = arkx.indexOf(arr[i]);
//             if(index == -1) {
//                 arkx.push(arr[i]);
//         }     
//      }
//      return arkx;
// }
// console.log(delelem());

// Xndir 4 - Gtnel elementneri gumary
// let sum;
// function calc() {
//     let arr = getArray();
//     sum = 0;
//     for(let i = 0; i < arr.length; i++) {
//         sum+=arr[i];
//     }
//     return sum;
// }
// alert((calc()));

// Xndir 5 - Erku zangvacneri miacum
// let first = [1,2,3];
// let second = [4,5,6];
// let third = [];
// for(let i = 0; i < first.length; i++) {
//     third.push(first[i]);
// }
// for(let j = 0; j < second.length; j++ ) {
//     third.push(second[j]);
// }
// console.log(third);