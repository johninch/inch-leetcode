/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 找出最低价格，每次更新最低价格或取最大利润
var maxProfit = function (prices) {
    let profit = 0
    let minPrice = Number.MAX_SAFE_INTEGER // 只需找出最低价格

    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i]
        } else {
            profit = Math.max(profit, prices[i] - minPrice)
        }
    }

    return profit
};
// @lc code=end

