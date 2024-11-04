function removeNthFromEnd(head, n){
    let slow = head;
    let fast = head;

    for(let i=0;i<n;i++){
        fast = fast.next;
    }
    if(fast === null){
        return head.next;
    }
    while(fast !== null && fast.next !== null){
        slow = slow.next;
        fast = fast.next;
    }
    slow.next = slow.next.next;
    return head;
}

// TC = O(n)
// SC = O(1)