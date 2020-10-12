/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    if (nums.length < 3) {
        return Math.max(...nums);
    }

    let top1 = -Infinity
    let top2 = -Infinity
    let top3 = -Infinity

    for (let n of nums) {
        if (n > top1) {
            top3 = top2
            top2 = top1
            top1 = n
        } else if (n > top2 && n < top1) {
            top3 = top2
            top2 = n
        } else if (n > top3 && n < top2) {
            top3 = n
        }
    }

    if (top1 === -Infinity || top2 === -Infinity || top3 === -Infinity) {
        return Math.max(top1, top2, top3)
    }

    return top3
};
// @lc code=end

