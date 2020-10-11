/*
 * @lc app=leetcode.cn id=17 lang=javascript
 *
 * [17] 电话号码的字母组合
 */

// @lc code=start
/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits) return []

    let nums = digits.split('')
    const map = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
    let codes = nums.map(i => map[i])

    const combine = (arr) => {
        if (arr.length < 2) {
            return arr[0].split('')
        }

        let tmp = []
        for (let i = 0; i < arr[0].length; i++) {
            for (let j = 0; j < arr[1].length; j++) {
                tmp.push(`${arr[0][i]}${arr[1][j]}`)
            }
        }

        arr.splice(0, 2, tmp)

        if (arr.length > 1) {
            return combine(arr)
        } else {
            return arr[0]
        }
    }

    return combine(codes)
};
// @lc code=end

