// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Actual code
// function mergeList(list1, list2) {
//   let dummy = new ListNode(0);
//   let current = dummy;

//   while (list1 !== null && list2 !== null) {
//     if (list1.val < list2.val) {
//       current.next = list1;
//       list1 = list1.next;
//     } else {
//       current.next = list2;
//       list2 = list2.next;
//     }
//     current = current.next;
//   }
//   if (list1 !== null) {
//     current.next = list1;
//   } else {
//     current.next = list2;
//   }
//   return dummy.next;
// }





// Full Code with Output
// Definition for singly-linked list node
function ListNode(val, next = null) {
    this.val = val;
    this.next = next;
  }
  
  // Function to merge two sorted linked lists
  var mergeTwoLists = function(list1, list2) {
    let dummy = new ListNode(0); // Step 1: Create a dummy node
    let current = dummy;
  
    // Step 2: Traverse both lists until one of them is exhausted
    while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) { // Compare current values in both lists
        current.next = list1;  // Point 'current.next' to 'list1' node
        list1 = list1.next;    // Move 'list1' to the next node
      } else {
        current.next = list2;  // Point 'current.next' to 'list2' node
        list2 = list2.next;    // Move 'list2' to the next node
      }
      current = current.next;  // Advance 'current' to the next position in the merged list
    }
  
    // Step 4: Attach remaining nodes if any list is still not empty
    current.next = list1 !== null ? list1 : list2;
  
    return dummy.next; // Return the merged list, starting from dummy.next
  };
  
  // Helper function to create a linked list from an array
  function createLinkedList(arr) {
    let dummy = new ListNode(0);
    let current = dummy;
    for (let value of arr) {
      current.next = new ListNode(value);
      current = current.next;
    }
    return dummy.next;
  }
  
  // Helper function to print a linked list
  function printLinkedList(head) {
    let current = head;
    let result = [];
    while (current !== null) {
      result.push(current.val);
      current = current.next;
    }
    console.log(result.join(" -> "));
  }
  
  // Create two sorted linked lists
  let list1 = createLinkedList([1, 2, 4]);
  let list2 = createLinkedList([1, 3, 4]);
  
  // Merge the lists
  let mergedList = mergeTwoLists(list1, list2);
  
  // Print the merged list
  console.log("Merged Linked List:");
  printLinkedList(mergedList); // 1 -> 1 -> 2 -> 3 -> 4 -> 4

  // TC = O(n + m)
  // SC = O(1)
  