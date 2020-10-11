/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let fuhao = 1
    if (x < 0) {
        fuhao = 0
    }
    x = Math.abs(x).toString().split('').reverse().join('').valueOf()
    if (x < -Math.pow(2, 31) || x > Math.pow(2, 31) - 1) {
        return 0
    } else {
        return fuhao ? x : -x
    }
};
// @lc code=end

