/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let dummyHead = new ListNode(0); // 添加哑结点防止head被删掉
    dummyHead.next = head
    let fast = dummyHead
    let slow = dummyHead
    while (n) {
        if (!fast) {
            return null
        }
        fast = fast.next
        n--
    }

    while (fast && fast.next) {
        fast = fast.next
        slow = slow.next
    }

    slow.next = slow.next.next

    return dummyHead.next
};
// @lc code=end

