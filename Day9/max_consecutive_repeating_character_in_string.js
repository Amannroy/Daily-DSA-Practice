// Given a string, the task is to find the maximum consecutive repeating character in a string.

// Note: We do not need to consider the overall count, but the count of repeating that appears in one place.

// Input : str = "geeekk"
// Output : e
// Input : str = "aaaabbcbbb"
// Output : a

// Brute Force Approach
function maxConsecutive(str){
    let currentChar = str[0];
    let currentCount = 1;
    let maxChar = '';
    let maxCount = 0;

    for(let i=1;i<str.length;i++){
        if(str[i] ===  currentChar){
            currentCount++;
        }
        else{
            if(currentCount > maxCount){
                maxCount = currentCount; // Update max count
                maxChar = currentChar; // update max character
                
            }
            // Reset for the new character
            currentCount = 1;
            currentChar = str[i]; 
        }
    }
    // Final check for the last character sequence
    if(currentCount > maxCount){
        maxCount = currentCount;
        maxChar = currentChar;
    }
    return maxChar;
}
console.log(maxConsecutive("geeekk")); // e
console.log(maxConsecutive("aaaabbcbbb")); // a

// TC = O(n)
// SC = O(1)