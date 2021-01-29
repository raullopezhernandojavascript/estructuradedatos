// Ejemplo de Grafo no dirigido

class Graph{
    constructor(){
        this.nodes = 0;
        this.adjacentList = {}
    }
    // Para hacer un grafo necesito los nodos(vertices) y los bordes

    addVertex(node){
        this.adjacentList[node] = [];
        this.nodes++;
    }
    addEdge(node1,node2){
        // Generamos las conexiones del nodo1 y nodo 2 en las dos conexiones
        this.adjacentList[node1].push(node2)
        this.adjacentList[node2].push(node1)
    }
}


const myGraph = new Graph();

// Una vex copiamos esto es nuestras navegador (DevTools en Chrome) agregamos unos nodos o 
// vortices de prueba
// myGraph.addVertex("1");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");
// myGraph.addVertex("8");

// Una vez hecho esto hay que poner las conexiones , es decir con que conectaria cada nodo
// myGraph.addEdge("3","5") EL borde 1 conecta con el 3 y el 5
// myGRaph.addEdge("6","3") El borde 2 conecta con el 6 y el 3
// myGRaph.addEdge("1","6") El borde 3 conecta con el 1 y el 6
// myGRaph.addEdge("1","3") El borde 4 conecta con el 1 y 3
// myGRaph.addEdge("1","4") El borde 5 conecta con el 1 y 4
// myGRaph.addEdge("4","5") EL borde 6 conecta con el 4 y el 5
// myGRaph.addEdge("8","4") El borde 8 conecta con el 8 y el 4

// Con esto configurado cuando mostremos el grafo "myGraph" en la consola del navegador 
// se vera de la siguiente manera

// 1:["6","3","4"] El nodo 1 esta conectado al 6 al 3 y al 4
// 3:["5","6","1"] El nodo 3 esta conectado al 5 al 6 y al 1
// 4:["1","5","8"] El nodo 4 esta conectado al 1 al 5 y al 8
// 5:["3","4"] El nodo 5 esta conectado con el 3 y el 4
// 6:["3","1"] El nodo 6 esta conectado con el 3 y el 1
// 8:["4"] El nodo 8 conecta con el 4
