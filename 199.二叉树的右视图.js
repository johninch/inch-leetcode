/*
 * @lc app=leetcode.cn id=199 lang=javascript
 *
 * [199] 二叉树的右视图
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
 * @return {number[]}
 */
var rightSideView = function (root) {
    if (!root) return []

    const queue = [[root, 0]]
    const res = []

    while (queue.length) {
        let [cur, level] = queue.shift()
        res[level] ? res[level].push(cur.val) : res[level] = [cur.val]

        cur.left && queue.push([cur.left, level + 1])
        cur.right && queue.push([cur.right, level + 1])
    }

    return res.map(arr => arr[arr.length - 1])
};
// @lc code=end

