// Given a string s, return the longest 
// palindromic substring in s.

 

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"

function longestPalindrome(s) {
    // Edge case: If the string has 1 or fewer characters, return it as is
    if (s.length <= 1) {
        return s;
    }

    // Initialize an empty string to store the longest palindromic substring found
    let lps = "";

    // Loop through each character in the string, treating each as a center
    for (let i = 0; i < s.length; i++) {
        
        // Odd-length palindrome: Centered at a single character s[i]
        let low = i;
        let high = i;
        // Expand outwards as long as characters match and boundaries are valid
        while (low >= 0 && high < s.length && s[low] === s[high]) {
            low--;
            high++;
        }
        // Extract the palindrome substring and update `lps` if it's the longest found so far
        let palindrome = s.substring(low + 1, high);
        if (palindrome.length > lps.length) {
            lps = palindrome;
        }

        // Even-length palindrome: Centered between s[i-1] and s[i]
        low = i - 1;
        high = i;
        // Expand outwards as long as characters match and boundaries are valid
        while (low >= 0 && high < s.length && s[low] === s[high]) {
            low--;
            high++;
        }
        // Extract the palindrome substring and update `lps` if it's the longest found so far
        palindrome = s.substring(low + 1, high);
        if (palindrome.length > lps.length) {
            lps = palindrome;
        }
    }
    // Return the longest palindromic substring
    return lps;
}


console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"


// TC = O(n^2)
// SC = O(1)