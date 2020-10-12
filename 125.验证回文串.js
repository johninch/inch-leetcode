/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    // 注意要过滤除数字和字母的所有字符
    s = s.toLowerCase().replace(/[^\w]*/g, '').replace(/_/g, '');

    let left = 0
    let right = s.length - 1

    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++
        right--
    }

    return true
};
// @lc code=end

