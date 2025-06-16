// Vinicius Ferreira Novacoski & Nicolas Justino Veiga

export default class Network {
    private vertices: string[] = [];
    private edges: [string, string][] = [];

    public add(a: string, b: string): void {
        if (!this.vertices.includes(a))
            this.vertices.push(a);

        if (!this.vertices.includes(b))
            this.vertices.push(b);

        const exists = this.edges.some(
            edge => (edge[0] === a && edge[1] === b) || (edge[0] === b && edge[1] === a)
        );

        if (!exists)
            this.edges.push([a, b]);
    }

    public getConnected(vertexParam: string): string[] {
        const allsubgraphs = this.getSubgraphs();
        for (let i = 0; i < allsubgraphs.length; i++) {

            if (allsubgraphs[i].includes(vertexParam)) 
                return allsubgraphs[i].filter(value => value !== vertexParam).sort();
        }

        return [];
    }

    public getNotConnected(vertexParam: string): string[] {
        const allsubgraphs = this.getSubgraphs();
        let result: string[] = [];

        allsubgraphs.forEach(subgraph => {
            if (!subgraph.includes(vertexParam))
                result = result.concat(subgraph);
        });

        return result.sort();
    }

    public getSubgraphs(): string[][] {
        const visited: string[] = [];
        const subgraphs: string[][] = [];

        for (let i = 0; i < this.vertices.length; i++) {
            const vertex = this.vertices[i];

            if (!visited.includes(vertex)) {
                const subgraph = this.findSubgraph(vertex, visited);

                subgraphs.push(subgraph);
            }
        }

        return subgraphs;
    }

    private getNeighbors(vertex: string): string[] {
        const result = this.edges.filter(edge => edge.includes(vertex)).map(edge => {
            return edge[0] === vertex ? edge[1] : edge[0];
        });

        return result;
    }

    private findSubgraph(vertex: string, visited: string[], subgraph: string[] = []): string[] {
        subgraph.push(vertex);
        visited.push(vertex);

        const neighbors = this.getNeighbors(vertex);
        for (let i = 0; i < neighbors.length; i++) {

            const neighbor = neighbors[i];

            if (!visited.includes(neighbor))
                this.findSubgraph(neighbor, visited, subgraph);
        }
        return subgraph;
    }
}
