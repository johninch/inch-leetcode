/*
 * @lc app=leetcode.cn id=442 lang=javascript
 *
 * [442] 数组中重复的数据
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
    const res = []
    for (let i = 0; i < nums.length; i++) {
        let value = Math.abs(nums[i]) //! 取值记得要加绝对值
        if (nums[value - 1] < 0) {
            res.push(value)
        } else {
            nums[value - 1] = -nums[value - 1]
        }
    }

    return res
};
// @lc code=end

