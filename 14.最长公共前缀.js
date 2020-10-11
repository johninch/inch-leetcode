/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs || !strs.length) return ''
    if (strs.length === 1) return strs[0]

    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let j = 0
        for (; j < strs[i].length; j++) {
            if (prefix[j] !== strs[i][j]) {
                break;
            }
        }
        prefix = prefix.substring(0, j)
        if (prefix === '') {
            return ''
        }
    }

    return prefix
};
// @lc code=end

