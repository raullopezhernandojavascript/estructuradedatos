// El comportamiento de un Stack es de tipo LIFO (El ultimo en llegar es el primer en salir)

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Stack{
    cosntructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek(){
        return this.top;
    }

    push(value){
        const newNode = new Node(value);
        // Si la pila o stack esta vacia el elemento de arriba y de abajo van a coincidir
        if(this.length === 0){
            this.top = newNode;
            this.bottom = newNode
        }else{
        // Si la pila o stack no esta vacia el elemento que esta arriba debera guardarse en 
        // una variable "holdingPointer". Ahora el elemento de arriba sera el elemento que
        // entra , es decir el "newNode" y el siguiente al top pues sera el que antes era el
        // top es decir "holdingPointer"

        // ¿No podemos decir directamente que el elemento que metemos sera "this.top"?
        // La respuesta es NO. Ya que si hacemos esto el elemento que antes era el top
        // se queda sin referencia y por lo tanto es borrado por Javascript. Es lo que
        // se conoce como "Garbage Collection"

            const holdingPointer = this.top;
            this.top = newNode;
            this.top.next = holdingPointer


        }
        this.length++;
        
        return this; // Retornamos el stack completo
    }

    pop(){
       if(!this.node){
           console.log("No hay valores o nodos en el stack");
       }
       const topNode = this.top;
       if(this.length ===1){
           this.top = null;
           this.bottom = null;
       }else{
           this.top = this.top.next;
       }
       length--;
       return topNode;
    }

}
const myStack = new Stack() // El stack no se inicializa con ningun elemento. Lo vamos llenando