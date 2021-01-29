// En los queues seria FIFO el primero en llegar es el primero en salir
// Metodos
// -Enqueue - Agregar un elemento al final de la linea
// - Dequeue - Remover el primer elemento de la linea
// -Peek - Tomar el primer elemento de la linea

// IMPORTANTE - Si agregamos algo no lo ponemos al principio como en los stack sino al final

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.last = null;
        this.first = null;
        this.length = 0;
    }

    enqueue(val) {
        const element = new Node(val);
        if (this.length === 0) {
            this.first = element;
            this.last = this.first;
        } else {
            this.last.next = element;
            this.last = element;
        }
        this.length++;
        return this;
    }

    dequeue() {
        const newFirst = this.first.next;
        this.first = newFirst;
        this.length--;
        return this.first;
    }

    peek() {
        return this.first;
    }
}