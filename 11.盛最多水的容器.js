/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let area = 0
    let left = 0
    let right = height.length - 1
    while (left < right) {
        if (height[left] < height[right]) {
            area = Math.max(area, height[left] * (right - left))
            left++
        } else {
            area = Math.max(area, height[right] * (right - left))
            right--
        }
    }

    return area
};
// @lc code=end

