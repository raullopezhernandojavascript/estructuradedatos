//Ejemplo para construir arbol binary search. 
// Este binary search lo implementan muchos algoritmos para realizar busquedas
// y es por esta razon por la que conviene conocerlo

// Funcionamiento . Es sencillo de cada nodo padre el siguiente nodo si es menor
// se coloca a la izquierda en la rama y si es mayor en la derecha en la rama. 
// Posteriormente estos nodos colocados a la derecha o izquierda se pueden ramificar
// siendo estos ahora el root o nodo padre y los nodos que le preceden tambien estaran 
// a izquieda de este (menores) o derecha (mayores)

// EJEMPLO DE BINARY SEARCH

//    10
//  4    20
// 2 8 17 170


class Node {
    constructor(value) {
        this.left = null;
        this.right = null;
        this.value = value
    }
}

class BinarySearchTree {
    constructor() {
        // El constructor lleva el primer elemento del arbol. Desde este nodo
        // es del que empezamos hacer crecer el nodo
        this.root = null
    }

    insert(value) {
        const newNode = new Node(value);
        if (this.root === null) {
            this.root = newNode
        } else {
            // El elemento "root" necesitamos meterlo en una variable para meterlo
            // ya sea a la derecha o a la izquierda dependiendo el valor
            let currentNode = this.root;
            while (true) {
                // Validaciones para el lado izquierdo
                if (value < currentNode.value) {
                    if (!currentNode.left) {
                        currentNode.left = newNode;
                        return this
                    }
                    currentNode.left
                    // Validaciones para el lado derecho
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }
    //Buesca el valor y devuelve toda su ramificacion
    search(value) {
        let firstNode = this.root;
        while (true) {
            if (firstNode.right === null && firstNode.left === null) {
                if (value !== firstNode.value) {
                    return "No esta en el arbol";
                }
            }
            if (value === firstNode.value) {
                return firstNode;
            } else if (value < firstNode.value) {
                firstNode = firstNode.left;
            } else {
                firstNode = firstNode.right;
            }
        }
    }

    // Este es un search que devuelve un boolean

    search(value, tree = this.root) {

        if (tree == null) {
            return "El elemento no se encuentra.";
        }
        else if (value > tree.value) {
            return this.search(value, tree.right);
        }
        else if (value < tree.value) {
            return this.search(value, tree.left);
        }
        else {
            return "¡El elemento ha sido encontrado!";
        }

    }

}

const tree = new BinarySearchTree();