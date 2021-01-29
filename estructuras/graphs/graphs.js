// Grafos



// ¿Como representamos los grafos en codigo?

/*

      2 - 0
     /  \
    1 - 3
*/

//Edge-List
// Se representan las conexiones del grafo en un array

const graph = [
    [0,2],
    [2,3],
    [2,1],
    [1-3]
];

//Adjacent List
// En este tipo de representacion de lista de adjacencia se miran con que otros nodos conecta
// un nodo concreto y cada una de estas conexiones por nodo se mete en un array. 
// En la siguiente fila podemos ver una representacion de este hecho en el que en el comentario
// podemos ver los nodos "0,1,2,3" y debajo de estos el array que indica con que conecta
// cada numero de nodo

// Dos representaciones de adjacencias
//              0    1      2       3
const graph = [[2],[2,3],[0,1,3], [1,2]]

// Representacion del anterior en objeto JSON
const graph = {
    0:[2],
    1:[2,3],
    2:[0,1,3],
    3:[1,2]
}

// Adjacent Matrix
// Representacion en matriz. La representacion en matriz funciona de la siguiente manera.
// Partiendo de que cada posicion del array representa un numero es decir [0,1,2,3] y que cada
// cada array representa las conexiones de cada numero. Pondremos un 0 si hay conexion con ese 
// nodo con respecto al nodo en el que estamos

const graph = [
    [0,0,1,0], // Nodo 0 conecta con el 2 por eso lleva un 1 en la tercera posicion
    [0,0,1,1], // Nodo 1 conecta con el 2 y el 3 por eso lleva un 1 en el tercer y cuarto espacio
    [1,1,0,1],
    [0,1,1,0]
]

// Representacion de lo anterior en objeto JSON
const graph = {
    0:[0,0,1,0], 
    1:[0,0,1,1],
    2:[1,1,0,1],
    3:[0,1,1,0]
}

