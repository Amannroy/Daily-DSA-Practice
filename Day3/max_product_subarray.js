// Given an integer array nums, find a subarray that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.

// Example 1:

// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
// Example 2:

// Input: nums = [-2,0,-1]
// Output: 0
// Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

function maxProduct(arr){
    let ans = 0;

    if(arr.length === 1){
        return arr[0];
    }

    let currProduct = 1;
    for(let i=0;i<arr.length;i++){
        if(currProduct !== 0){
            currProduct *= arr[i];
            ans = Math.max(currProduct, ans);
        }else{
            currProduct = 1;
        }
    }

    currProduct = 1;
    for(let i=arr.length-1;i>=0;i--){
        if(currProduct !== 0){
            currProduct *= arr[i];
            ans = Math.max(currProduct, ans);
        }else{
            currProduct = 1;
        }
    }
    return ans;
}
console.log(maxProduct([2,3,-2,4])); // 6

// TC = O(n)
// SC = O(1)
