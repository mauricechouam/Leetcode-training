/*
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    
    const list = new ListNode(-1, head);
    let before = list;
    let last = list.next;
    
    for (let i = 1; i < n; i++) last = last.next;
    
    while (last.next) {
        last = last.next;
        before = before.next;
    }
    
    if (before.next.next) before.next = before.next.next;
    else before.next = null;
    
    return list.next;    
};
