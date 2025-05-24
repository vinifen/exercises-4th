type EdgeBF = { from: string; to: string; weight: number };

function bellmanFord(edges: EdgeBF[], nodes: string[], start: string): Record<string, number> {
  const distances: Record<string, number> = {};
  for (const node of nodes) distances[node] = Infinity;
  distances[start] = 0;

  for (let i = 0; i < nodes.length - 1; i++) {
    for (const { from, to, weight } of edges) {
      if (distances[from] + weight < distances[to]) {
        distances[to] = distances[from] + weight;
      }
    }
  }

  for (const { from, to, weight } of edges) {
    if (distances[from] + weight < distances[to]) {
      throw new Error("Chart contains negative weight cycle");
    }
  }

  return distances;
}
