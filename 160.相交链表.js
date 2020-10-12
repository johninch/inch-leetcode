/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    const stack1 = []
    const stack2 = []

    let node = headA
    while (node) {
        stack1.push(node)
        node = node.next
    }

    node = headB
    while (node) {
        stack2.push(node)
        node = node.next
    }

    node = null
    while (stack1.length && stack2.length) {
        let node1 = stack1.pop()
        let node2 = stack2.pop()
        if (node1 === node2) {
            node = node1
        } else {
            break
        }
    }

    return node
};
// @lc code=end

