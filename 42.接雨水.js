/*
 * @lc app=leetcode.cn id=42 lang=javascript
 *
 * [42] 接雨水
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let volume = 0
    let leftMax = []
    let rightMax = []

    for (let i = 0, max = 0; i < height.length - 1; i++) {
        max = Math.max(max, height[i])
        leftMax[i] = max
    }

    for (let i = height.length - 1, max = 0; i >= 0; i--) {
        max = Math.max(max, height[i])
        rightMax[i] = max
    }

    for (let i = 0; i < height.length - 1; i++) {
        volume = volume + (Math.min(leftMax[i], rightMax[i]) - height[i]) * 1
    }

    return volume
};
// @lc code=end

