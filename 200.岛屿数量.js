/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {

    const helper = (grid, i, j, rows, cols) => {
        if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || grid[i][j] === "0") {
            return
        }

        grid[i][j] = "0"
        helper(grid, i - 1, j, rows, cols)
        helper(grid, i + 1, j, rows, cols)
        helper(grid, i, j - 1, rows, cols)
        helper(grid, i, j + 1, rows, cols)
    }

    let rows = grid.length
    if (rows === 0) return 0
    let cols = grid[0].length

    let sum = 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === "1") {
                helper(grid, i, j, rows, cols)
                sum++
            }
        }
    }

    return sum
};
// @lc code=end

