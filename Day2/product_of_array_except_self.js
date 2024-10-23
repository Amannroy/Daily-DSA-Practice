// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

// Example:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]


function productExceptSelf(nums){
    let n = nums.length;
    let left = new Array(nums.length);
    let right = new Array(nums.length);

    left[0] = 1;
    for(let i=1;i<nums.length;i++){
        left[i] = left[i-1] * nums[i-1];
    }

    right[n-1] = 1;
    for(let i=n-2; i>=0; i--){
        right[i] = right[i+1] * nums[i+1];
    }

    let ans = new Array(n);
    for(let i=0;i<n;i++){
        ans[i] = left[i] * right[i];
    }
    return ans;
}
console.log(productExceptSelf([1,2,3,4])); // [24, 12, 8, 6]

// TC = O(n) + O(n) + O(n) = O(n)
// SC = O(n)
