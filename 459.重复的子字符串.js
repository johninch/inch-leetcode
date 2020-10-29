/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length > 10000) return false;

    return /^(\w+)\1+$/.test(s)
};
// @lc code=end

