// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

// DIJKSTRA'S ALGORITHM CODE IMPLEMENTATION

// REFER TO "./Dijkstra’s Algorithm_code breakdown.html" FOR A DETAILED BREAKDOWN OF THE CODE 

const { PriorityQueue } = require('./Priority Queue/priorityQueue');

class weightedGraph {
    constructor() {
        this.adjacencyList = {};
    }

    addVertex(vertex) {
        if (this.adjacencyList[vertex]) return;
        this.adjacencyList[vertex] = [];
    }

    addEdge(vertex1, vertex2, weight) {
        this.adjacencyList[vertex1].push({
            node: vertex2,
            weight
        });
        this.adjacencyList[vertex2].push({
            node: vertex1,
            weight
        });
    }

    dijkstraShortestPath(start, end) {
        // returns the shortest path in an array
        let path = []; 

        let distances = {};
        let previous = {};
        let visited = [];


        const pq = new PriorityQueue();


        for (const vertex in this.adjacencyList) {
            previous[vertex] = null;
            if (vertex === start) {
                distances[start] = 0;
                pq.enqueue(start, 0);
            } else {
                distances[vertex] = Infinity;
                pq.enqueue(vertex, Infinity);
            }
        }


        while (pq.values.length) {
            let current = pq.dequeue().val;


            if (visited.includes(current)) {
                continue;
            } else {
                visited.push(current);
            }


            if (current === end) {
                while (previous[current]) {
                    path.push(current);
                    current = previous[current];
                }
                path = path.concat(start).reverse();
                break;
            }


            this.adjacencyList[current].forEach(neighbour => {
                // calculate the total weight/newDistance from the start to the neighbour
                let newDistance = distances[current] + neighbour.weight;

                if (newDistance < distances[neighbour.node]) {
                    distances[neighbour.node] = newDistance;
                    previous[neighbour.node] = current;
                    pq.enqueue(neighbour.node, newDistance);
                }
            });
        }

        return path;

        // ================================
        // ADDITIONAL
        // ================================
        // Currently, this method uses a simple array and the includes() method to keep track of visited vertices. Try to implement this keeping track of visited vertices using a list/tree (NOTE: data structure best used for searching and insertion - HASH TABLE/Built-in Object Data Structure)
        // 
    }
}

// Example
const graph = new weightedGraph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A", "B", 4);
graph.addEdge("A", "C", 2);
graph.addEdge("B", "E", 3);
graph.addEdge("C", "D", 2);
graph.addEdge("C", "F", 4);
graph.addEdge("D", "E", 3);
graph.addEdge("D", "F", 1);
graph.addEdge("E", "F", 1);

// console.log(graph.adjacencyList);

console.log(graph.dijkstraShortestPath("A", "E")); // [ 'A', 'C', 'D', 'F', 'E' ]
