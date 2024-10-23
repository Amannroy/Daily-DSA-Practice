// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

function removeDuplicate(arr){
    let unique = 1;
    for(let i=1;i<arr.length;i++){
        if(arr[i] !== arr[i-1]){
            arr[unique] = arr[i];
            unique++;
        }
    }
    return unique;
}
console.log(removeDuplicate([1,1,2,])); // 2

// TC = O(n)
// SC = O(1)
