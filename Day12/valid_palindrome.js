// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

function isPalindrome(s){
    let left = 0;
    let right = s.length-1;

    while(left <= right){
        let leftChar = s[left].toLowerCase();
        let rightChar = s[right].toLowerCase();

        if(!isAlphanumeric(leftChar)){
            left++;
        }
        else if(!isAlphanumeric(rightChar)){
            right--;
        }
        else if(leftChar !== rightChar){
            return false;
        }else{
            left++;
            right--;
        }
    }
    return true;
}
function isAlphanumeric(ch){
    return /^[0-9a-zA-Z]+$/.test(ch);
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // true


// TC = O(n)
// SC = O(1)