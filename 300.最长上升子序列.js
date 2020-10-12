/*
 * @lc app=leetcode.cn id=300 lang=javascript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (!nums.length) return 0

    // dp[i] 表示以 nums[i] 结尾的「上升子序列」的长度
    const len = nums.length
    const dp = new Array(len + 1).fill(1) // 初始化为1，因为子序列最少包含自己，即1

    for (let i = 1; i < len; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                // 加1为在nums[j]的最长递增子序列dp[j]基础上加上当前元素nums[i]所得的最长递增子序列
                dp[i] = Math.max(dp[i], dp[j] + 1)
            }
        }
    }

    dp.sort((a, b) => b - a)

    return dp[0]
};
// @lc code=end

