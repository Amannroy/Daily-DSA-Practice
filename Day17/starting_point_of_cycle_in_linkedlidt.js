// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.

// Input: head = [3,2,0,-4], pos = 1
// Output: tail connects to node index 1
// Explanation: There is a cycle in the linked list, where tail connects to the second node.

function detectCycle(head){
    let slow = head;
    let fast = head;
    let intersection = null;

    if(!head || !head.next){
        return null;
    }

    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next.next;
        if(slow === fast){
            intersection = slow;
            break;
        }
    }
       
        // If no cycle was found, return null
        if(intersection === null){
            return null;
        }

        // Find the start of the cycle
        let start = head;
        while(start !== intersection){
            start = start.next;
            intersection = intersection.next;
        }

        return start;
}

// TC = O(n) 
// SC = O(1)