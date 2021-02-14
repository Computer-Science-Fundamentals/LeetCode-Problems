/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class LinkedList {
    ListNode head;
    ListNode tail;
    
    public LinkedList(){
        head = null;
        tail = null;
    }
    
    public void Add(int val){
        ListNode node = new ListNode(val);
        //case 1 (empty list)
        if (head == null){
            head = node;
        }
        //case 2 (list with 1 Node)
        else if (head.next == null){
            head.next = node;
            tail = node;
        }
        //case 3 (2+ nodes)
        else{
            tail.next = node;
            tail = node;
        }
    }
    
    public ListNode Get(){
        return head;
    }
}

public class Solution {
    public ListNode AddTwoNumbers(ListNode l1, ListNode l2) {
        LinkedList sumList = new LinkedList();
        int carry = 0;
        while(l1 != null || l2 != null){
            int digit1 = (l1 != null) ? l1.val : 0;
            int digit2 = (l2 != null) ? l2.val : 0;
            int sum = digit1 + digit2 + carry;
            int digitSum = sum % 10;
            sumList.Add(digitSum);
            carry = sum / 10;
            if (l1 != null)
                l1 = l1.next;
            if (l2 != null)
                l2 = l2.next;
        }
        
        if (carry > 0)
            sumList.Add(carry);
        
        return sumList.Get();
    }
}
