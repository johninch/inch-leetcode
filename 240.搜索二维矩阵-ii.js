/*
 * @lc app=leetcode.cn id=240 lang=javascript
 *
 * [240] 搜索二维矩阵 II
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 使用二分法
var searchMatrix = function (matrix, target) {
    for (let item of matrix) {
        if (target < item[0]) {
            return false
        }

        let left = 0
        let right = item.length - 1
        let mid

        while (left <= right) {
            mid = (left + right) >> 1
            if (item[mid] === target) {
                return true
            }

            if (item[mid] < target) {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }

    return false
};
// @lc code=end

