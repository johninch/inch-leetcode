/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let sum = 0
    let res = nums[0]
    for (let i = 0; i < nums.length; i++) {
        if (sum + nums[i] > nums[i]) {
            sum = sum + nums[i]
        } else {
            sum = nums[i]
        }

        res = Math.max(res, sum)
    }
    return res
};
// @lc code=end

