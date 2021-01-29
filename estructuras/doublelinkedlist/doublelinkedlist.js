//Double Linked List



class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null
    }
}

class MyDoubleLinkedList{
    // Cuando se genere una instancia le obligamos a llevar un valor
    cosntructor(value){
        this.head = {
            value:value,
            next:null,
            prev:null
        }
        this.tail = this.head;
        this.length = 1;
    }
    // Agregar un nodo al final
    append(value){
        const newNode = new Node(value);
        newNode.preview = this.tail;
        // Generamos nuevo nodo que esta al final
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        
        return this;
    }

    //Agregamos un nodo al principio
    prepend(value){
        const newNode = new Node(value);
        //La parte del next es la cabeza. Es decir tenemos "-->1-->2-->3-->4"
        newNode.next = this.head;
        //La cabeza es el nuevo nodo . Es decir ahora ya tendriamos el 0 situado  "0-->1-->2-->3-->4"
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index,value){
        if(index >= this.length){
            console.log("No hay suficientes nodos. Se agregara al final")
            return this.append(value)
        }
        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index -1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;
        this.length++;
    }

    getTheIndex(index){
        let counter = 0;
        let currentNode = this.head;
        while(counter !== index){
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }


}

let myLenkedList = new MySingleLinkedList(1);