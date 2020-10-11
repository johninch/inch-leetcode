/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return []

    const res = []
    const queue = [[root, 0]]

    while (queue.length) {
        let [cur, level] = queue.shift()

        res[level] ? res[level].push(cur.val) : res[level] = [cur.val]

        cur.left && queue.push([cur.left, level + 1])
        cur.right && queue.push([cur.right, level + 1])
    }

    return res.reverse()
};
// @lc code=end

