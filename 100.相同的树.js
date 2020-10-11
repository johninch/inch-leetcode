/*
 * @lc app=leetcode.cn id=100 lang=javascript
 *
 * [100] 相同的树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} left
 * @param {TreeNode} right
 * @return {boolean}
 */
var isSameTree = function (left, right) {
    if (!left && !right) {
        return true
    }

    if (!left || !right) {
        return false
    }

    if (left.val !== right.val) {
        return false
    }

    return isSameTree(left.left, right.left) && isSameTree(left.right, right.right)
};
// @lc code=end

