// COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele

const { PriorityQueue } = require('./priority queue class');

// Dijkstra's Psuedocode:
// 1) Create an object, called distances. This object will keep track of the shortest paths from a start vertex to an end vertex. Set each key in this object equal to the keys in the adjacencyList object, and the values set to Infinity. Set the value for the start vertex to null.
// 2) Create an object, called previous. Set each key equal to the keys in the adjacencyList with a value of null.
// 3) Add each vertex with a priority of Infinity to the priority queue, except the start vertex, which should have a priority of 0.
// 4) Create an object, called visited, that stores the vertices we visit so that these vertices aren't visited again needlessly.
// 5) Start a loop as long as there is something in the priority queue:
//   5.1) Dequeue a vertex, called current, from the priority queue. This is the vertex that we are currently "visiting".
//   5.2) Check if the current vertex is in the visited object
//        - If yes, continue the loop so that it jumps to the next iteration
//        - If no, store the current vertex in the visited object
//   5.3) If the current vertex is equal to the end vertex - build the path and end the loop.
//   5.4) Otherwise, loop through each value in the adjacencyList (the neighbours) at the current vertex.
//        5.4.1) Calculate the total weight/newDistance from the start to the neighbour
//        5.4.2) If the new distance is less than the distance stored in our "distances" object:
//              - update the distances object with the new distance
//              - update the "previous" object to contain the current vertex (how did we get to the neighbour?)
//              - enqueue the vertex with the total new distance from the start node
// 6) Return the shortest path.

// simple weighted graph
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
        let path = []; // returns the shortest path in an array
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
        // Currently, this method uses a simple array and the includes() method to keep track of visited vertices. Try to implement this keeping track of visited vertices using a list/tree (data structure best used for searching and insertion - HASH TABLE/Built-in Object Data Structure)
        // 
    }
}

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
