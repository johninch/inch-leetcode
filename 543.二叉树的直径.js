/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let maxNum = 0

    const maxDepth = (root) => {
        if (!root) return 0;

        let lNum = maxDepth(root.left)
        let rNum = maxDepth(root.right)

        maxNum = Math.max(maxNum, lNum + rNum)

        return 1 + Math.max(lNum, rNum)
    }

    maxDepth(root)

    return maxNum
};
// @lc code=end

