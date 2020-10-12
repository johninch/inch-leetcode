/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    if (!nums.length) return 0

    let maxLen = 1
    let arr = [nums[0]]

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            arr.push(nums[i])
            maxLen = Math.max(maxLen, arr.length)
        } else {
            arr = [nums[i]]
        }
    }

    return maxLen
};
// @lc code=end

