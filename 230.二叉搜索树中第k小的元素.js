/*
 * @lc app=leetcode.cn id=230 lang=javascript
 *
 * [230] 二叉搜索树中第K小的元素
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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
    // 利用BST的中序遍历是升序
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

    return res[k - 1]
};
// @lc code=end

