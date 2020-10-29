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
var addStrings = function(num1, num2) {
    let l1 = num1.length
    let l2 = num2.length

    let str = '' // str是字符串，计算时是字符串拼接
    let add = 0 // add代表进位
    let tmp // 计算临时值
    while (l1 || l2) {
        tmp = (l1 ? +num1[--l1] : 0) + (l2 ? +num2[--l2] : 0) + add
        str = tmp % 10 + str // 拼接，当前计算值拼在前面，想想列竖式
        add = tmp > 9 ? 1 : 0
    }

    if (add) {
        str = 1 + str
    }

    return str
};
// @lc code=end

