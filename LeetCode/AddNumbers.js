/**
 * https://leetcode.com/problems/add-two-numbers/
 * 
 * Difficulty -> Medium
 * 
 * Solved on 17th April 2019
 * 
 * Stats -> Runtime : 128ms faster than 74.90% && Memory: 39.2 MB  less than 14.82% 
 */


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
var addTwoNumbers = function(l1, l2) {

    var prev,head,l1Iterator = l1,l2Iterator= l2, carry, leftNums;
    while(l1Iterator !== null && l2Iterator !== null) {
        
        var sumNode = {};
        carry ? ((sumNode.val = l1Iterator.val + l2Iterator.val + 1) && (carry = 0)) : (sumNode.val = l1Iterator.val + l2Iterator.val);
        checkAndReturnCarryIfAny(sumNode.val) ? ((carry = 1) && (sumNode.val = sumNode.val % 10)):'';
        prev ? (prev.next = sumNode) : (head=sumNode);
        prev = sumNode;
        l1Iterator = l1Iterator.next; l2Iterator =l2Iterator.next;
    }
    
    l1Iterator ? (leftNums = l1Iterator) : (leftNums = l2Iterator);
    
    while (leftNums !== null) {
        prev.next = leftNums;
        prev = leftNums;
        carry ? ((prev.val = prev.val+ 1) && (carry = 0)) : (prev.val = prev.val);
        checkAndReturnCarryIfAny(prev.val) ? ((carry = 1) && (prev.val = prev.val % 10)):'';
        leftNums = leftNums.next;
    }
    
    if(carry) {
        var carryNode = {};
        carryNode.val = 1;
        prev.next = carryNode;
    }
    
    
    return head;
    
     function checkAndReturnCarryIfAny(val) {
        if(val > 9) {
            return 1;
        } else {
            return 0;
        }
    }
};
