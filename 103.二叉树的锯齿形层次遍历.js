/*
 * @lc app=leetcode.cn id=103 lang=javascript
 *
 * [103] 二叉树的锯齿形层次遍历
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
var zigzagLevelOrder = function (root) {
    if (!root) return []

    const res = []
    const queue = [[root, 0]]

    while (queue.length) {
        let [cur, level] = queue.shift()
        if (level % 2) {
            res[level] ? res[level].unshift(cur.val) : res[level] = [cur.val]
        } else {
            res[level] ? res[level].push(cur.val) : res[level] = [cur.val]
        }

        cur.left && queue.push([cur.left, level + 1])
        cur.right && queue.push([cur.right, level + 1])
    }

    return res
};
// @lc code=end

