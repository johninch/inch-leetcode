/*
 * @lc app=leetcode.cn id=56 lang=javascript
 *
 * [56] 合并区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length < 1) return []
    if (intervals.length === 1) return [intervals[0]]

    intervals.sort((a, b) => a[0] - b[0]);
    const arr = [intervals[0]]
    for (let i = 1; i < intervals.length; i++) {
        if (arr[arr.length - 1][1] < intervals[i][0]) {
            // 不交叉
            arr.push(intervals[i])
        } else {
            if (arr[arr.length - 1][1] < intervals[i][1]) {
                arr[arr.length - 1][1] = intervals[i][1];
            }
        }
    }

    return arr
};
// @lc code=end

