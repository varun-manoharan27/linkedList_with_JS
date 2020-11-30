class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  append(value) {
    const newNode = {value: value, next: null};
    if(this.tail) {
       this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = {value: value, next: this.head};
    this.head = newNode;
    if(!this.tail) {
      this.tail = newNode;
    }
  }

  delete(value) {
    if(!this.head){
      return;
    }
    while(this.head && this.head.value === value) {
      this.head = this.head.next
    }
    let curNode = this.head;
    while(curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next
      }
    }
    if(this.tail.value === value) {
      this.tail = curNode;
    }
  }

  insertAfter(value, afterValue ) {
    const existingNode = this.find(afterValue);
    if(existingNode) {
      const newNode = {value: value, next: existingNode.next};
      existingNode.next = newNode;
    }
  }

  find(value) {
    if(!this.head) {
      return;
    }
    let curNode = this.head;
    while(curNode) {
      if(curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }

  toArray() {
    const elements = [];
    let curNode = this.head;
    while(curNode) {
      elements.push(curNode);
      curNode = curNode.next;
    }
    return elements;
  }

}

const linkedList1 = new LinkedList();
linkedList1.append(1);
linkedList1.append('hello');
linkedList1.append('Varun');
linkedList1.append('Varun');
linkedList1.append(true);
linkedList1.append("lastfornow");
linkedList1.prepend("MadeFirst");
linkedList1.prepend("MadeFirst");

console.log(linkedList1.toArray());

linkedList1.delete("Varun");
linkedList1.delete("lastfornow");
linkedList1.delete("MadeFirst");
linkedList1.insertAfter("Var",1)

console.log(linkedList1.toArray());

console.log(linkedList1.find(1));
