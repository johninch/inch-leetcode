/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let n = s.length
    let res = ''
    // dp[i,j]：字符串s从索引i到j的子串是否是回文串
    let dp = Array.from(new Array(n), () => new Array(n).fill(0))

    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] == s[j]) {
                if (j - i < 2) {
                    // j - i < 2：意即子串是一个长度为0或1的回文串
                    dp[i][j] = 1
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
            // 如果s[i,j]是回文串，且长度大于现有长度，则更新
            if (dp[i][j] && j - i + 1 > res.length) {
                res = s.substring(i, j + 1)
            }
        }
    }

    return res
};
// @lc code=end

