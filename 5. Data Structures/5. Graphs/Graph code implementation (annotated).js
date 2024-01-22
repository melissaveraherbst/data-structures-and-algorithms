// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// https://visualgo.net/en
// https://musicmap.info/
// https://www.geeksforgeeks.org/graph-and-its-representations/

// vertex = node

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    // an edge is the connection between 2 vertices
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeEdge(vertex1, vertex2) {
        // Solution A
        // Loop both arrays until the values match, then remove using splice and the index.
        // if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        // for (let i = 0; i < this.adjacencyList[vertex1].length; i++) {
        //     let edge = this.adjacencyList[vertex1][i];
        //     if (edge === vertex2) {
        //         this.adjacencyList[vertex1].splice(i, 1);
        //     }
        // }
        // for (let i = 0; i < this.adjacencyList[vertex2].length; i++) {
        //     let edge = this.adjacencyList[vertex2][i];
        //     if (edge === vertex1) {
        //         this.adjacencyList[vertex2].splice(i, 1);
        //     }
        // }

        // Solution B
        // if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        // Use filter() to filter all values into a new array that is not equal to the values to be removed.
        this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(edge => edge !== vertex2);
        this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(edge => edge !== vertex1);

        // Solution C
        // Use indexOf() to determine the index of the value and then use the splice method to remove the value.
        // if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        // let i = this.adjacencyList[vertex1].indexOf(vertex2);
        // let j = this.adjacencyList[vertex2].indexOf(vertex1);
        // this.adjacencyList[vertex1].splice(i, 1);
        // this.adjacencyList[vertex2].splice(j, 1);
    }
    removeVertex(vertex) {
        // remove the vertex and it's connections to any other vertices 
        if (this.adjacencyList[vertex]) {
            while (this.adjacencyList[vertex].length) {
                this.removeEdge(vertex, this.adjacencyList[vertex][0]);
            }
        }
        delete this.adjacencyList[vertex];
    };
}

// test data
const graph = new Graph();

graph.addVertex("Melissa");
graph.addVertex("Etienne");
graph.addVertex("Rudelle");
graph.addVertex("Jay-G");
graph.addVertex("Leila");
// Expected Output:
// Etienne: []
// Jay-G: []
// Leila: []
// Melissa: []
// Rudelle: []

graph.addEdge("Melissa", "Etienne");
graph.addEdge("Melissa", "Rudelle");
graph.addEdge("Rudelle", "Jay-G");
graph.addEdge("Rudelle", "Leila");
graph.addEdge("Jay-G", "Leila");
// Expected output:
// Etienne: ['Melissa']
// Jay-G: (2) ['Rudelle', 'Leila']
// Leila: (2) ['Rudelle', 'Jay-G']
// Melissa: (2) ['Etienne', 'Rudelle']
// Rudelle: (3) ['Melissa', 'Jay-G', 'Leila']

// graph.removeEdge("Rudelle", "Jay-G");
// Expected output:
// Etienne: ['Melissa'];
// Jay-G: ['Leila'];
// Leila: (2)['Rudelle', 'Jay-G'];
// Melissa: (2)['Etienne', 'Rudelle'];
// Rudelle: (2)['Melissa', 'Leila']

graph.removeVertex("Leila");
// Expected output:
// Etienne: ['Melissa'];
// Jay-G: ['Leila'];
// Leila: ['Jay-G'];
// Melissa: ['Etienne']

console.log(graph.adjacencyList);