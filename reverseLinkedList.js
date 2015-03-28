var Node = function(value){
  this.value = value;
  this.next = null;
};

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

// add to list's tail
LinkedList.prototype.add = function(value) {
  
  // if list is headless, make value its head & tail
  if(!this.head) {
    this.head = new Node(value);
    this.tail = this.head;
    this.head.next = this.tail;
  }
  
  // otherwise just make value list's new tail
  else {
    var holder = this.tail;
    this.tail = new Node(value);
    holder.next = this.tail;    
  }
  
};

// remove and return list's head
LinkedList.prototype.remove = function() {
  var holder = this.head;
  this.head = this.head.next;
  return holder;
};

// return true if value appears in list, false otherwise
LinkedList.prototype.contains = function(target) {

  var traverseFind = function(node, test) {
    if(test(node)) return true;
    if(node.next) return traverseFind(node.next, test);
    return false;
  };

  return traverseFind(this.head, function(node) {
    return node.value === target;
  });
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

var list = new LinkedList();
list.add(5);
console.log('expect list to have a head 5 and tail 5. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
list.add(4);
console.log('expect list to have a head 5 and tail 4. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
list.add(6);
console.log('expect list to have a head 5 and tail 6. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
var oldHead = list.remove();
console.log('expect list.remove to remove and return head 5 and create new head 4. actual return: ' + oldHead.value + ' actual new head: ' + list.head.value);
console.log('expect list.contains to return true for values in list, false for values not in list.');
console.log('list should contain 6: ' + list.contains(6));
console.log('list should contain 4: ' + list.contains(4));
console.log('list should not contain 5: ' + list.contains(5));
console.log('list should not contain 42: ' + list.contains(42));
list.add(42);
console.log('list should contain 42: ' + list.contains(42));
console.log('expect list to have a head 4 and tail 42. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
list.add(47);
list.reverse();
console.log('expect reversed list to have a head 47 and tail 4. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);
list.reverse();
console.log('expect re-reversed list to have a head 4 and tail 47. actual head: ' + list.head.value + ' actual tail: ' + list.tail.value);


