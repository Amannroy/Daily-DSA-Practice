// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// Example 1:

// Input: s = "anagram", t = "nagaram"

// Output: true

// Example 2:

// Input: s = "rat", t = "car"

// Output: false

function isAnagram(s,t){
    if(s.length !== t.length){
        return false;
    }

    let charCount = {};
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(charCount[char]){
            charCount[char]++;
        }
        charCount[char] = 1;
    }

    for(let i=0;i<t.length;i++){
        let char = t[i];
        if(!charCount[char]){
            return false;
        }else{
           charCount[char]--;
        }
    }
    return true;
}
console.log(isAnagram("listen", "silent")); // true

// TC = O(n)
// SC = O(n)
