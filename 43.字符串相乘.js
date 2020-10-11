/*
 * @lc app=leetcode.cn id=43 lang=javascript
 *
 * [43] 字符串相乘
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let len1 = num1.length
    let len2 = num2.length

    let res = new Array(len1 + len2).fill(0)

    for (let i = len1 - 1; i >= 0; i--) {
        for (let j = len2 - 1; j >= 0; j--) {
            const mul = num1[i] * num2[j]
            // p1是进位，p2是当前位
            const p1 = i + j, p2 = i + j + 1
            const sum = mul + res[p2]
            res[p2] = sum % 10
            res[p1] = res[p1] + Math.floor(sum / 10)
        }
    }

    while (res[0] === 0) {
        res.shift()
    }

    return res.join('') || '0'
};
// @lc code=end

