/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/*
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const beforeHead = new ListNode();
 let curr = beforeHead;
 let carry = false;
 while (l1 || l2 || carry) {
   const a = (l1 || 0) && l1.val;
   const b = (l2 || 0) && l2.val;
   const sum = a + b + carry;
   curr.next = new ListNode(sum % 10);
   curr = curr.next;
   l1 = l1 && l1.next;
   l2 = l2 && l2.next;
   carry = sum >= 10;
 }
 return beforeHead.next;
};
