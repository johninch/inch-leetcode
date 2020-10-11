/*
 * @lc app=leetcode.cn id=92 lang=javascript
 *
 * [92] 反转链表 II
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
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
var reverseBetween = function (head, m, n) {
    const dummy = new ListNode(0)
    dummy.next = head
    let tmpHead = dummy

    let pos = 0
    while (pos++ < m - 1) {
        tmpHead = tmpHead.next
    }

    let prev = null
    let cur = tmpHead.next

    while (pos++ <= n) {
        let next = cur.next
        cur.next = prev

        prev = cur
        cur = next
    }

    // 将原链表与区间反转的链表拼接
    // console.log(cur.val, prev.val, tmpHead.val, tmpHead.next.val)
    // cur指向后半截的头
    // prev指向反转后区间头
    // tmpHead指向前半截尾
    // tmpHead.next指向反转后区间尾
    tmpHead.next.next = cur // 反转后区间尾.next = 后半截的头
    tmpHead.next = prev // 前半截尾.next = 反转后区间头

    return dummy.next
};
// @lc code=end

