// kadane's Algorithm
// Given an integer array nums, find the 
// subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

function maxSum(arr){
    let maxSum = arr[0];
    let currSum = arr[0];

    for(let i=1;i<arr.length;i++){
        if(currSum < 0){
            currSum = 0;
        }

        currSum += arr[i];
        if(currSum > maxSum){
            maxSum = currSum;
        }
    }
    return maxSum;
}
console.log(maxSum([-2,1,-3,4,-1,2,1,-5,4])); // 6

// TC = O(n)
// SC = O(1)

