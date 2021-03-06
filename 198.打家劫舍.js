/*
 * @lc app=leetcode.cn id=198 lang=javascript
 *
 * [198] 打家劫舍
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    const dp = Array.from(nums.length + 1)
    dp[0] = 0
    dp[1] = nums[0]
    // dp[2] = Math.max(dp[1], dp[0] + nums[1])
    // dp[3] = Math.max(dp[2], dp[1] + nums[2])
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }

    return dp[nums.length]
};
// @lc code=end

