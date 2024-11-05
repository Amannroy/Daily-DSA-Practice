// Given the heads of two singly linked-lists headA and headB, return the node at which the two lists intersect. If the two linked lists have no intersection at all, return null.

// Input: intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3
// Output: Intersected at '8'

function intersectionLinkedList(headA, headB){
    let m = findLength(headA);
    let n = findLength(headB);
    let fp = headA;
    let sp = headB;

    if(m <= n){
    for(let i=0;i<n-m;i++){
         sp = sp.next;
    }
}else{
    for(let i=0;i<m-n;i++){
         fp = fp.next;
    }
}

while(fp !== null){
    if(fp === sp){
        return fp;
    }
    fp = fp.next;
    sp = sp.next;
}
return null;
}
function findLength(head){
    let current = head;
    let length = 0;
    if(current !== null){
       length++;
       current = current.next;   
    }
    return length;
}


// TC = O(m + n)
// SC = O(1)
