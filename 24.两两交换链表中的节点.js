/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
    // prev => first => second => next
    const dummy = new ListNode('')
    dummy.next = head

    let prev = dummy
    let first = prev.next

    while (first && first.next) {
        let second = first.next
        let next = second.next

        second.next = first
        first.next = next
        prev.next = second

        prev = first
        first = prev.next
    }

    return dummy.next
};
// @lc code=end

