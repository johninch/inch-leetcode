/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    flowerbed.push(0)
    flowerbed.unshift(0)

    for (let i = 1; i < flowerbed.length - 1; i++) {
        if (!flowerbed[i - 1] && !flowerbed[i] && !flowerbed[i + 1]) {
            flowerbed[i] = 1
            n--
        }
    }

    return n > 0 ? false : true
};
// @lc code=end

