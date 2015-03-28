var Node = function(value){
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

LinkedList.prototype.add = function(value) {
  var nodeToAdd = new Node(value);
  // if list is headless, make value its head & tail
  if(!this.head) {
    this.head = nodeToAdd;
    this.tail = this.head;
    this.head.next = this.tail;
  }
  
  // otherwise just make value list's new tail
  else {
    this.tail.next = nodeToAdd;
    this.tail = nodeToAdd;
  }
  
};

// remove and return list's head
LinkedList.prototype.remove = function() {
  var result = this.head ? this.head.value : null;
  this.head = this.head.next ? this.head.next : null;
  return result;
};

// return true if value appears in list, false otherwise
LinkedList.prototype.contains = function(target) {
  var current = this.head;
  while(current) {
    if(current.value === target) return true;
    current = current.next;
  }
  return false;
};

// reverse the list in place
LinkedList.prototype.reverse = function() {
  var traReverse = function(list, node, nextNode) {
    if(nextNode) {
      traReverse(list, nextNode, nextNode.next);
      nextNode.next = node;
    } else {
      list.tail = list.head;
      list.tail.next = null;
      list.head = node;
    }
  };
  
  traReverse(this, this.head, this.head.next);
};

// tests
var list = new LinkedList();
list.add(5);
console.log('expect list to have a head 5 and tail 5. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
list.add(4);
console.log('expect list to have a head 5 and tail 4. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
list.add(6);
console.log('expect list to have a head 5 and tail 6. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
var oldHead = list.remove();
console.log('expect list.remove to remove and return head 5 and create new head 4. actual return: ' + oldHead + ' actual new head: ' + list.head.value);
console.log('expect list.contains to return true for values in list, false for values not in list.');
console.log('expect list to contain 6: ' + list.contains(6));
console.log('expect list to contain 4: ' + list.contains(4));
console.log('expect list not to contain 5: ' + list.contains(5));
console.log('expect list not to contain 42: ' + list.contains(42));
list.add(42);
console.log('expect list to contain 42: ' + list.contains(42));
console.log('expect list to have a head 4 and tail 42. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
list.add(47);
list.reverse();
console.log('expect reversed list to have a head 47 and tail 4. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
list.reverse();
console.log('expect re-reversed list to have a head 4 and tail 47. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);


