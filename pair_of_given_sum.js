// Given an array arr[] of n integers and a target value, the task is to find whether there is a pair of elements in the array whose sum is equal to target.

// Input: arr[] = {0, -1, 2, -3, 1}, target = -2
// Output: True
// Explanation: If we calculate the sum of the output,1 + (-3) = -2

// Input: arr[] = {1, -2, 1, 0, 5}, target = 0
// Output: False

// Brute Force Approach
// function given_sum(arr, target){
//     for(let i=0;i<arr.length;i++){
//         for(let j=i+1;j<arr.length;j++){
//             let sum = arr[i] + arr[j];
//             if(sum === target){
//                 return true;
//             }
//         }
//     }
//     return false;
// }
// console.log(given_sum([0,-1,2,-3,1], -2)); // true

// TC = O(n^2)
// SC = O(1)

// Optimized Approach

// function givenSum(arr, target){
//     arr.sort((a,b) => (a-b));
//     let left = 0;
//     let right = arr.length-1;

//     while(left < right){
//         let sum = arr[left] + arr[right];
//         if(sum === target){
//             return true;
//         }else if(sum < target){
//             left++;
//         }else{
//             right--;
//         }
//     }
//     return false;
// }
// console.log(givenSum([0,-1,2,-3,1], -2)); // true

// TC = O(n log n)
// SC = O(1)
