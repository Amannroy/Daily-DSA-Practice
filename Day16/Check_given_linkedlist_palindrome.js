// Given the head of a singly linked list, return true if it is a 
// palindrome or false otherwise.

// Input: head = [1,2,2,1]
// Output: true

function isPlaindrome(head){
    let string1 = "";
    let string2 = "";
    let node = head;

    while(node !== null){
        string1 = `${string1}${node.val}`;
        string2 = `${node.val}${string2}`;
        node = node.next;
    }
    return string1 === string2;
}

// TC = O(n)
// SC = O(1)