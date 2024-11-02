// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.

// Example 1:

// Input: s = "abc"
// Output: 3
// Explanation: Three palindromic strings: "a", "b", "c".
// Example 2:

// Input: s = "aaa"
// Output: 6
// Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".


function palindromeSubstring(s) {
    // Initialize count to keep track of palindromic substrings
    let count = 0;

    // Helper function to expand around a given center and count palindromic substrings
    function expandAroundCenter(left, right) {
        // Expand as long as the indices are within bounds and characters at left and right are equal
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            count++;    // Increment count for each palindrome found
            left--;     // Move left pointer one step to the left
            right++;    // Move right pointer one step to the right
        }
    }

    // Loop through each character and character gap as potential palindrome centers
    for (let i = 0; i < s.length; i++) {
        // Check for palindromes with odd length centered at s[i]
        expandAroundCenter(i, i);

        // Check for palindromes with even length centered between s[i] and s[i+1]
        expandAroundCenter(i, i + 1);
    }

    // Return the total count of palindromic substrings
    return count;
}
console.log(palindromeSubstring("abc")); // 3

// TC = O(n^2)
// SC = O(1)
