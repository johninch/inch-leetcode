/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) {
        return false
    }
    let str = x.toString()
    let len = str.length

    if (len <= 1) {
        return true
    }
    let left = 0
    let right = len - 1

    while (left < right) {
        if (str[left] != str[right]) {
            return false
        }
        left++
        right--
    }

    return true
};
// @lc code=end

