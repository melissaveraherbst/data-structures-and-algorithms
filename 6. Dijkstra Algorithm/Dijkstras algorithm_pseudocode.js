    // COURSE: JavaScript Algorithms and Data Structures Masterclass from Udemy by Colt Steele
    
    // Dijkstra's Algorithm Psuedocode:
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