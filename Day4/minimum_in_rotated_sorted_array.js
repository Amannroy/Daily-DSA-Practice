// Input: nums = [3,4,5,1,2];
// Output: 1
// Explanation: The original array was [1,2,3,4,5] rotated 3 times

function findMin(nums){
    let start = 0;
    let end = nums.length-1;
    let ans = nums[0];

    while(start <= end){
        let mid = Math.floor((start + end) / 2);

        if(nums[mid] >= nums[0]){
            start = mid + 1;
        }else{
            ans = nums[mid];
            end = mid - 1;
        }
    }
    return ans;
}
console.log(findMin([3,4,5,1,2]));  // 1

// TC = O(log n)
// SC = O(1)
