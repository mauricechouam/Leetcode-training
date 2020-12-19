/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if(!head) return null;
    if(!head.next) return head;
       
    const valueStore=new Set();
    const start=head;
    
    while (head && head.next)
    {
     const next=head.next;
     valueStore.add(head.val);
     
     if(valueStore.has(next.val))
     {
      head.next=next.next;
     }
     else
     {
      head=next;
     }
    }
    return start;
   }