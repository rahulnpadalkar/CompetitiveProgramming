/*
* Link to Problem: https://leetcode.com/problems/same-tree/
* Solved on 16th April 2019
*/

var isSameTree = function(p, q) {
    
    if(!p && !q) {
        console.log('Backtracking')
        return true;
    }
    
    if(!p || !q) {
        return false;
    }
    
    if(p.val === q.val) {
        console.log("Value of p is: " + p.val + " and value of q is: "+ q.val);    
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
        
    } else {
        return false;
    }
    
};