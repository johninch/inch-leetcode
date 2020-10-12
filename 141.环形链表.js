/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    const set = new Set();
    while (head && head.next) {
        if (set.has(head)) {
            return true;
        }
        set.add(head)
        head = head.next
    }

    return false
};
// var hasCycle = function (head) {
//     let fast = head
//     let slow = head
//     let firstMeet = null
//     while (fast && fast.next) {
//         fast = fast.next.next
//         slow = slow.next
//         if (fast === slow) {
//             firstMeet = fast
//             break
//         }
//     }

//     return Boolean(firstMeet)
// };
// @lc code=end

