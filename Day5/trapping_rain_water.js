// Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

// Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
// Output: 6
// Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
// Example 2:

// Input: height = [4,2,0,3,2,5]
// Output: 9

function trap(height){
    let n = height.length;

    let left = new Array(n).fill(0);
    let right = new Array(n).fill(0);

    left[0] = height[0];
    right[n-1] = height[n-1];

    for(let i=1;i<height.length;i++){
        left[i] = Math.max(left[i-1], height[i]);
    }

    for(let i=n-2;i>=0;i--){
        right[i] = Math.max(right[i+1], height[i]);
    }

    let ans = 0;
    for(let i=0;i<height.length;i++){
        ans += Math.min(left[i], right[i]) - height[i];
    }
    return ans;
}
console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // 6

// TC = O(n)
// SC = O(n)
