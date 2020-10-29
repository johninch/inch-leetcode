/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const res = []

    const backtrack = (res, tmpList, nums) => {
        if (tmpList.length === nums.length) {
            // 终止条件
            res.push([...tmpList])
        } else {
            // 递归循环
            for (let i = 0; i < nums.length; i++) {
                if (tmpList.includes(nums[i])) continue
                tmpList.push(nums[i])
                backtrack(res, tmpList, nums)
                tmpList.pop()
            }
        }
    }

    backtrack(res, [], nums)

    return res
}
// @lc code=end

