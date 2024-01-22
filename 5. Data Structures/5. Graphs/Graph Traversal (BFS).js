// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// https://visualgo.net/en

class Graph {
    constructor() {
        this.adjacencyList = {};
    }
    addVertex(vertex) {
        this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1, vertex2) {
        this.adjacencyList[vertex1].push(vertex2);
        this.adjacencyList[vertex2].push(vertex1);
    }
    removeVertex(vertex) {
        if (this.adjacencyList[vertex]) {
            while (this.adjacencyList[vertex].length) {
                this.removeEdge(vertex, this.adjacencyList[vertex][0]);
            }
        }
        delete this.adjacencyList[vertex];
    };
    removeEdge(vertex1, vertex2) {
        if (!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2]) return;
        let i = this.adjacencyList[vertex1].indexOf(vertex2);
        let j = this.adjacencyList[vertex2].indexOf(vertex1);
        this.adjacencyList[vertex1].splice(i, 1);
        this.adjacencyList[vertex2].splice(j, 1);
    }
    // Visit each vertex with BFS iteratively
    // BFS: Visit all the neighbours of a vertex before visiting the  neighbours of the vertex's neighbours :P
    BFSIterative(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;

        // queue = First In First Out data structure
        let queue = [];
        let results = [];
        let visited = {};

        queue.push(vertex);

        while (queue.length) {
            let current = queue.shift();

            if (!visited[current]) {
                results.push(current);
                visited[current] = true;
                this.adjacencyList[current].forEach((neighbour) => {
                    queue.push(neighbour);
                });
            }
        }

        console.log(results);
        return results;
    }
}

// -------------------------------------------------------------------
const graph = new Graph();

graph.addVertex(1);
graph.addVertex(2);
graph.addVertex(3);
graph.addVertex(4);
graph.addVertex(5);
graph.addVertex(6);
graph.addVertex(7);
graph.addVertex(8);
graph.addVertex(9);
graph.addVertex(10);

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(1, 4);
graph.addEdge(1, 5);
graph.addEdge(3, 4);
graph.addEdge(3, 5);
graph.addEdge(3, 9);
graph.addEdge(3, 10);
graph.addEdge(4, 5);
graph.addEdge(4, 6);
graph.addEdge(6, 7);
graph.addEdge(6, 8);
graph.addEdge(7, 8);
graph.addEdge(9, 10);

graph.BFSIterative(5);
