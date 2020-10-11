/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
var postorderTraversal = function (root) {
    const stack = []
    const res = []
    let current = root

    while (current || stack.length) {
        while (current) {
            stack.push(current)
            res.push(current.val)
            current = current.right
        }

        current = stack.pop()
        current = current.left
    }

    return res.reverse()
};
// @lc code=end

