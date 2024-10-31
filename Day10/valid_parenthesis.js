// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

function isParenthesis(s){
    let stack = [];
    for(let i=0;i<s.length;i++){
        let char = s[i];
        if(char === '(' || char === '{' || char === '['){
            stack.push(char);
        }
        else if(char === ')' || char === '}' || char === ']'){
            if(isEmpty(stack)){
               return false 
            }
            let top = stack.pop();
            if((char === ')' && top !== '(')||
            (char === '}' && top !== '{')||
            (char === ']' && top !== '[')){
                return false;
            }
        }
    }
    return isEmpty(stack);
}
function isEmpty(stack){
    return stack.length === 0;
}
console.log(isParenthesis("()[]{}")); // true

// TC = O(n)
// SC = O(n)