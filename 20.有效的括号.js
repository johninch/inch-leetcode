/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const stack = []
    let strs = s.split('')
    let i = 0
    while (i < strs.length) {
        let cur = strs[i]
        switch (cur) {
            case '(':
            case '[':
            case '{':
                stack.push(cur)
                break
            case ')':
                if (stack.pop() !== '(') return false
                break
            case '}':
                if (stack.pop() !== '{') return false
                break
            case ']':
                if (stack.pop() !== '[') return false
                break
            default:
                return false
        }
        i++
    }

    return !stack.length
};
// @lc code=end

