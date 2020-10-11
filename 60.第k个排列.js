/*
 * @lc app=leetcode.cn id=60 lang=javascript
 *
 * [60] 第k个排列
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function (n, k) {
    const nums = []
    for (let i = 1; i <= n; i++) {
        nums.push(i)
    }

    const res = []

    const backtrack = (res, tmpList, nums) => {
        if (tmpList.length === nums.length) {
            // 终止条件
            res.push([...tmpList].join(''))
        } else {
            // 循环
            for (let i = 0; i < nums.length; i++) {
                if (tmpList.includes(nums[i])) continue
                tmpList.push(nums[i])
                backtrack(res, tmpList, nums)
                tmpList.pop()
            }
        }
    }

    backtrack(res, [], nums)

    return res[k - 1]
};

// 本题需要剪枝，否则暴力回溯会超时

// 由于回溯算法的时间复杂度很高，因此，如果在遍历的时候，
// 如果能够提前知道这一条分支不能搜索到满意的结果，就可以提前结束，
// 这一步操作称之为剪枝。

// 回溯算法会大量应用“剪枝”技巧达到以加快搜索速度。
// @lc code=end

