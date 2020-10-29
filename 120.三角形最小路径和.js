/*
 * @lc app=leetcode.cn id=120 lang=javascript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    // const dp = triangle
    // for (let i = triangle.length - 2; i >= 0; i--) {
    //     for (let j = 0; j < triangle[i].length; j++) {
    //         dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j]
    //     }
    // }

    // return dp[0][0]
    let res = triangle[0];
    let j = 0;
    for (var i = 1; i < triangle.length; i++) {
        if (triangle[i][j] < triangle[i][j + 1]) {
            res += triangle[i][j]
        } else {
            res += triangle[i][j + 1]
            j += 1
        }
        return res
    }
};
// 递归
// function minsum(triangle) {
//     var length = triangle.length;
//     var r = 0;
//     var c = 0;
//     function rode(r, c, arr) {
//         if (r == length - 1) {
//             return arr[r][c];

//         }
//         var start = rode(r + 1, c, arr);
//         var end = rode(r + 1, c + 1, arr);
//         return Math.min(start, end) + arr[r][c];

//     }
//     return rode(r, c, triangle);
// };
// @lc code=end

