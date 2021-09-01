/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
  // handle error that node doesn't exist
  if (!root) {
      return null;
  }
  // if they are both on the same side of the current node, check current node on that side
  // otherwise, return the current node
  // if both are larger than current
  if (root.val < p.val && root.val < q.val) {
      return lowestCommonAncestor(root.right, p, q);
  }
  // if both are lesser than current
  if (root.val > p.val && root.val > q.val) {
      return lowestCommonAncestor(root.left, p, q);
  }
  return root;

};
