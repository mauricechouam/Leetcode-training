/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(); 
    curr = head;
    remainder = 0;
    
    while(l1 != null || l2 != null){
        let x = l1 !== null?l1.val:0
        let y = l2 !== null?l2.val:0
        sum = x+y+remainder
        remainder = Math.floor(sum/10)
        
        curr.next = new ListNode(sum%10)
        curr = curr.next
        
        if(l1 !== null) l1 = l1.next
        if(l2 !== null) l2 = l2.next
    }
    
    if(remainder>0) curr.next = new ListNode(1)
    
    return head.next
};