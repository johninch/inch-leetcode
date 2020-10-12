/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
 * @return {ListNode}
 */
var detectCycle = function (head) {
    let fast = head
    let slow = head
    let firstMeet
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
        if (fast === slow) {
            firstMeet = fast
            break
        }
    }

    if (!firstMeet) {
        return null
    }

    while (firstMeet && head) {
        if (firstMeet === head) {
            return head
        }
        firstMeet = firstMeet.next
        head = head.next
    }
};
// @lc code=end

