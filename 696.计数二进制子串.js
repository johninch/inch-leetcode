/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
    let prev = 0 // prev 前一个数字连续出现的次数
    let cur = 1 // cur 当前数字连续出现的次数

    let res = 0 // res 结果子串个数

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            // 判断当前数字是否与后一个数字相同
            // 相同，则当前数字出现的次数cur加1
            cur++
        } else {
            // 不同，则当前数字的次数，事实上变成了前一个数字的次数，当前数字的次数重置为1
            prev = cur
            cur = 1
        }

        if (prev >= cur) {
            // 前一个数字出现的次数 >= 后一个数字出现的次数，则一定包含满足条件的子串
            res++
        }
    }

    return res
};
// @lc code=end

