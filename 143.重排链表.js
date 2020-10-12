/*
 * @lc app=leetcode.cn id=143 lang=javascript
 *
 * [143] 重排链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    const dummy = new ListNode(0)
    dummy.next = head

    let fast = dummy
    let slow = dummy

    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }

    let right = slow.next
    slow.next = null
    let left = dummy.next

    const reverse = (head) => {
        let prev = null
        let cur = head
        while (cur) {
            let next = cur.next
            cur.next = prev

            prev = cur
            cur = next
        }

        return prev
    }

    right = reverse(right)

    // console.log(left, right)

    while (left && right) {
        let lNext = left.next
        let rNext = right.next

        right.next = left.next
        left.next = right

        left = lNext
        right = rNext
    }

    return dummy.next
};
// @lc code=end

