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
    // Visit each vertex with DFS recursively
    DFSRecursive(vertex) {
        // assign the adjacency list to a new variable so that it is in scope for the helper (DFS) function
        let list = this.adjacencyList;
        
        if (!list[vertex]) return undefined;
        
        let results = [];
        let visited = {};
        
        // DFS Recursive Function steps:
        // Base case: if vertex is empty, return
        // Mark the vertex as visited (in this example, we are storing these values in an object)
        // Add the vertex to the results list
        // For each neighbour (connection) in the current vertex's neighbours,
        // if the neighbour is not visited, recursively call the helper function on the unvisited neighbour
        function DFS(vertex) {            
            visited[vertex] = true;
            results.push(vertex);

            // console.log("vertex:", vertex, ",", "neighbours:", list[vertex]);
            
            list[vertex].forEach((neighbour) => {
                if (!visited[neighbour]) {
                    DFS(neighbour);
                }
            })
        }
        
        DFS(vertex);
        
        console.log(results);

        return results;
    }
    // Visit each vertex with DFS iteratively
    DFSIterative(vertex) {
        if (!this.adjacencyList[vertex]) return undefined;
        
        // stack = LIFO data structure
        let stack = [];
        let results = [];
        let visited = {};

        stack.push(vertex);
        
        while (stack.length) {
            let current = stack.pop();
            if (!visited[current]) {
                results.push(current);
                visited[current] = true;
                this.adjacencyList[current].forEach((neighbour) => {
                    stack.push(neighbour);
                })
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

graph.DFSRecursive(5);
graph.DFSIterative(5);