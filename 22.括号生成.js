/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    if (!n) return []

    const res = []

    // cur :当前字符
    // left：当前字符中左括号个数
    // right:当前字符中右括号个数
    const helper = (cur, left, right) => {
        if (cur.length === 2 * n) {
            // 终止条件
            res.push(cur)
        } else {
            // 递归
            if (left < n) {
                helper(cur + '(', left + 1, right)
            }
            if (right < left) {
                helper(cur + ')', left, right + 1)
            }
        }
    }

    helper('', 0, 0)

    return res
};
// @lc code=end

