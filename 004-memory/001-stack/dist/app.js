"use strict";
/*
Basic operations:
Push - Add an item to the top of the stack
Pop - Remove the top item from the stack
Peek - Return the top of the stack, without removing it.
isEmpty - Return true if the stack is empty.
isFull - Return true if the stack is full, used when the stack is fixed size.
*/
class Stack {
    constructor() {
        this.array = [];
    }
    pop() {
        if (this.isEmpty())
            throw new EmptyStackException();
        return this.array.pop();
    }
    push(data) {
        this.array.push(data);
    }
    peek() {
        if (this.isEmpty())
            throw new EmptyStackException();
        return this.array[this.array.length - 1];
    }
    isEmpty() {
        return this.array.length === 0;
    }
}
