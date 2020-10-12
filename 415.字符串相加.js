/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let a = num1.length
    let b = num2.length

    let sum = '' // sum是字符串，计算时是字符串拼接
    let add = 0 // add代表进位和当前位计算临时值

    while (a || b) {
        a ? add += +num1[--a] : ''
        b ? add += +num2[--b] : ''

        sum = add % 10 + sum

        if (add > 9) add = 1
        else add = 0
    }

    if (add) {
        sum = 1 + sum
    }

    return sum
};
// @lc code=end

