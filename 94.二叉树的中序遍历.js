/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
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
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    const stack = []
    const res = []
    let current = root

    while (current || stack.length) {
        while (current) {
            stack.push(current)
            current = current.left
        }

        current = stack.pop()
        res.push(current.val)
        current = current.right
    }

    return res
};
// @lc code=end

