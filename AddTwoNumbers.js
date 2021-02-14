/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
class LinkedList{
    constructor(){
        this.head = null;
        this.tail = null;
    }
    
    add(val){
        const node = new ListNode(val);
        let head =  this.head;
        let tail = this.tail;
        //cases for creating a linkedList
        //case 1: when head is null (empty list)
        if (head === null){
            head = node;
        }
        //case 2: when head points to null(1 node in list)
        else if (head.next === null)        
        {
            tail = node;
            head.next = node;           
        }
        else
        //case 3: when tail is not null(atleast 2 nodes in list)
        {
            const prevTail = tail;
            //console.log(listNodeHead,listNodeTail)
            tail.next = node;
            tail = node;
        }
        
        this.head = head;
        this.tail = tail;
    }
    
    get(){
        return this.head;
    }
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const sumList = new LinkedList();
    let carry = 0;
    while(l1 != null || l2 != null){
        const digit1 = (l1 != null) ? l1.val : 0;
        const digit2 = (l2 != null) ? l2.val : 0;
        const sum = digit1 + digit2 + carry;
        const digitSum = sum % 10;
        sumList.add(digitSum);
        carry = Math.floor(sum/10);
        l1 = l1 && l1.next;
        l2 = l2 && l2.next;
    }
    
    if (carry > 0)
        sumList.add(carry);
    
    const l3 = sumList.get();
    
    return l3;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers2 = function(l1, l2) {
    const num1 = convertListToNumber(l1);
    const num2 = convertListToNumber(l2);
    const sum = num1 + num2;
    const l3 = convertNumberToList(sum);
    return l3;
};

var convertListToNumber = function(numLinkedList){
    let temp = numLinkedList;
    let placeValue = 0;
    let sum = 0;
    while(temp != null){
        const digit = temp.val;
        sum += Math.pow(10,placeValue++) * digit;
        temp = temp.next;
    }
    
    return sum;
}

var convertNumberToList = function(number){
    const sumList = new LinkedList();
    
    if (number === 0)
            return new ListNode(number);
    
    while(number != 0){
        const remainder = number % 10;
        sumList.add(remainder);  
        number = Math.floor(number/10);       
    }
    
    return sumList.get();
}
