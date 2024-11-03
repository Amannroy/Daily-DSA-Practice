function hasCycle(head){
    let slow = head;
    let fast = head;

    // If list is empty or has only one node, there cannot be a cycle
    if (head === null || head.next === null) {
        return false;
    }

    // Use two pointers to detect a cycle
    while (fast !== null && fast.next !== null) {
        slow = slow.next;        // Move slow pointer by 1
        fast = fast.next.next;    // Move fast pointer by 2

        // If slow and fast meet, there's a cycle
        if (slow === fast) {
            return true;
        }
    }
    return false;
}

// TC = O(n)
// SC = O(1)