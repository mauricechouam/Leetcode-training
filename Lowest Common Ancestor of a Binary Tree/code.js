/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let currNode = root
      
      if (currNode === null) return currNode
      
      if (currNode.val == p.val || currNode.val == q.val) {
          return currNode
      }
      
      let lVal = lowestCommonAncestor(currNode.left, p, q)
      let rVal = lowestCommonAncestor(currNode.right, p, q)
      
      if (lVal !== null && rVal !== null) return currNode
      if (lVal === null && rVal === null) return null
      
      return lVal || rVal
  };