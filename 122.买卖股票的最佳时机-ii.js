/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 只有价格上升，才增加利润
var maxProfit = function (prices) {
    let profit = 0
    let gap

    for (let i = 1; i < prices.length; i++) {
        gap = prices[i] - prices[i - 1]
        if (gap > 0) {
            // 只有价格上升，才增加利润
            profit += gap
        }
    }

    return profit
};
// @lc code=end

// [7,6,5,4,3,2,5,4,3,2,1,4]
// 6，只在价格上升区间买入和卖出，多次操作得到最大利润

