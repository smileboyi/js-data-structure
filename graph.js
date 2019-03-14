import Dictionary from './dictionary';

export default class Graph {
  // 顶点用数组存储
  vertices = [];
  // 顶点与顶点之间的联系用链表存储
  adjList = new Dictionary();

  constructor() {}

  // 添加顶点
  addVertex(v) {
    this.vertices.push(v);
    // 同一顶点与其他顶点的联系存储在一个数组（其他顶点）中
    this.adjList.set(v, []);
  }

  // 添加联系
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v);
  }

  toString() {
    let s = '';
    const vertices = this.vertices;
    let i = 0;
    const j = vertices.length;
    while (i < j) {
      s += vertices[i] + ' -> ';
      const neighbors = this.adjList.get(vertices[i]);
      neighbors.forEach(v => {
        s += v + ' ';
      });
      s += '\n';
      i += 1;
    }
    return s;
  }
}

// const graph = new Graph();
// ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I'].forEach(v => {
//   graph.addVertex(v);
// });
// graph.addEdge('A', 'B');
// graph.addEdge('A', 'C');
// graph.addEdge('A', 'D');
// graph.addEdge('C', 'D');
// graph.addEdge('C', 'G');
// graph.addEdge('D', 'G');
// graph.addEdge('D', 'H');
// graph.addEdge('B', 'E');
// graph.addEdge('B', 'F');
// graph.addEdge('E', 'I');
// console.log(graph.toString());
