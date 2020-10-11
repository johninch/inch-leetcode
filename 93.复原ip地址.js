/*
 * @lc app=leetcode.cn id=93 lang=javascript
 *
 * [93] 复原IP地址
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
    const res = []

    const helper = (cur, sub) => {
        if (sub.length > 12) return

        if (cur.length === 4 && cur.join('') === s) {
            // 终止条件
            res.push(cur.join('.'))
        } else {
            // 递归
            for (let i = 0, len = Math.min(3, sub.length), temp; i < len; i++) {
                temp = sub.slice(0, i + 1)

                if (temp < 256) {
                    helper(cur.concat([temp * 1]), sub.slice(i + 1))
                }
            }
        }
    }

    helper([], s)

    return res
};
// @lc code=end

