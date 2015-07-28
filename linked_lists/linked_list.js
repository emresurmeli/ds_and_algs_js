function LinkedList() {
  var Node = function(element) {
    this.element = element;
    this.next  = null;
  };

  var length = 0;
  var head   = null;

  // APPEND
  this.append = function(element) {
    var node = new Node(element);
    var current;

    if(head === null) { // first node on the list
      head = node;
    } else {
      current = head;
      // loop the list until you find the last item
      while(current.next) {
        current = current.next;
      }
      // get last item and assign next to node to make the link
      current.next = node;
    }

    length ++; // update the size of the list
  };
  // INSERT
  this.insert = function(position, element){

  };
  // REMOVE AT
  this.removeAt = function(position){
    // check for out-of-bounds values
    if(position > -1 && position < length) {
      var current = head;
      var index   = 0;
      var previous;
      // removing first item
      if(position === 0) {
        head = current.next;
      } else {
        while(index++ < position) {
          previous = current;
          current  = current.next;
        }
        // link previous with current's next: skip it to remove
        previous.next = current.next;
      }
      length --;
      return current.element;
    } else {
      return null;
    }
  };
  this.remove = function(element){};
  this.indexOf = function(element){};
  this.isEmpty = function(){};
  this.size = function(){};
  this.toString = function(){};
  this.print = function(){};
}

var list = new LinkedList();
    list.append(15);
    list.append(10);
