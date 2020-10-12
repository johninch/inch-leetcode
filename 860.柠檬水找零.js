/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
    let five = 0;
    let ten = 0;
    let cur

    for (let i = 0; i < bills.length; i++) {
        cur = bills[i];

        if (cur === 5) {
            five++
        } else if (cur === 10) {
            ten++
            if (five) {
                five--
            } else {
                return false
            }
        } else {
            if (ten && five) {
                ten--
                five--
            } else if (!ten && five >= 3) {
                five = five - 3
            } else {
                return false
            }
        }
    }

    return true
};
// @lc code=end

