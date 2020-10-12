/*
 * @lc app=leetcode.cn id=695 lang=javascript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {

    const helper = (grid, i, j, rows, cols) => {
        if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1 || grid[i][j] === 0) {
            return 0;
        }

        grid[i][j] = 0

        return 1 + helper(grid, i - 1, j, rows, cols)
            + helper(grid, i + 1, j, rows, cols)
            + helper(grid, i, j - 1, rows, cols)
            + helper(grid, i, j + 1, rows, cols)
    }

    const rows = grid.length
    if (rows === 0) return 0
    const cols = grid[0].length
    let maxArea = 0

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            if (grid[i][j] === 1) {
                let curArea = helper(grid, i, j, rows, cols)
                maxArea = Math.max(maxArea, curArea)
            }
        }
    }

    return maxArea
};
// @lc code=end

