/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var isValidBST = (root, min = -Infinity, max = Infinity) => {
  // if there's no node, then sure! it's a valid BST
  if (!root) {
    return true;
  }
  // if the value falls "out of bounds" return false
  if (root.val >= max || root.val <= min) {
    return false;
  }
  // recur, passing arguments based on left or right
  // on the left, the val needs to be between the current node's value (which has already been deemed ok)
  // and the running minimum
  // on the right, the val needs to be between the current val and running maximum
  return (isValidBST(root.left, min, node.val) && isValidBST(root.right, node.val, max));
};
