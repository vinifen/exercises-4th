type Edge = { to: string; weight: number };
type Graph = Record<string, Edge[]>;

function dijkstra(graph: Graph, start: string): Record<string, number> {
  const distances: Record<string, number> = {};
  const visited = new Set<string>();
  const pq: [string, number][] = [];

  for (const node in graph) {
    distances[node] = Infinity;
  }
  distances[start] = 0;
  pq.push([start, 0]);

  while (pq.length) {
    pq.sort((a, b) => a[1] - b[1]);
    const [current, currentDist] = pq.shift()!;

    if (visited.has(current)) continue;
    visited.add(current);

    for (const edge of graph[current]) {
      const newDist = currentDist + edge.weight;
      if (newDist < distances[edge.to]) {
        distances[edge.to] = newDist;
        pq.push([edge.to, newDist]);
      }
    }
  }

  return distances;
}
