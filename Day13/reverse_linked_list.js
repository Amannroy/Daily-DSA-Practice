// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1] 

class Node{
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
    }
    // Method to add a node at the end of the list
    add(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next){
            current = current.next;
        }
        current.next = newNode;
        }

    reverseList(){
        let prev = null;
        let curr = this.head;

        while(curr !== null){
            let newNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = newNode;
        }
        this.head = prev;
    }

    // Method to display the linked list as an array
       
    display(){
        let current = this.head;
        let result = [];
        while(current !== null){
            result.push(current.data);
            current = current.next;
        }
        return result;
    }
}

const linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.add(4);
linkedList.add(5);

console.log("Original List:", linkedList.display());

linkedList.reverseList();

console.log("Reversed list:", linkedList.display()); // Reversed list: [ 5, 4, 3, 2, 1 ]

// TC = O(n)
// SC = O(1)
