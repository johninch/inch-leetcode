/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let head = new ListNode('')
    let dummy = head
    let tmp = 0
    let add = 0
    while (l1 || l2) {
        tmp = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + add
        dummy.next = new ListNode(tmp % 10)
        add = tmp >= 10 ? 1 : 0
        dummy = dummy.next
        l1 && (l1 = l1.next)
        l2 && (l2 = l2.next)
    }

    if (add) {
        dummy.next = new ListNode(add)
    }

    return head.next
};
// @lc code=end

