// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

 

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.

function threeSum(nums){
  if(!nums || nums.length < 3)  return [];

  nums.sort((a,b) => a - b);

  let result = new Set();

  for(let i=0;i<nums.length-2;i++){
    let left = i+1;
    let right = nums.length-1;

    while(left < right){
        let sum = nums[i] + nums[left] + nums[right];
        if(sum === 0){
            result.add([nums[i], nums[left], nums[right]].toString());
            left++;
            right--;
        }else if(sum < 0){
            left++;
        }else{
            right--;
        }
    }
  }
  return Array.from(result).map(str => str.split(',').map(Number));
  }
  console.log(threeSum([-1,0,1,2,-1,-4]));  //  [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]

  // TC = O(n^2)
  // SC = O(n)
   