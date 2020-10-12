/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除排序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length
    let j = 0 // 不重复数组的索引

    for (let i = 1; i < n; i++) {
        // 当且仅当遇到下一个不相同即不重复的元素时，更新指针位置为下一个元素
        if (nums[i] !== nums[i - 1]) {
            j++
            nums[j] = nums[i] // 在原数组上操作
        }
    }

    return j + 1
};
// @lc code=end

