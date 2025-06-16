// Vinicius Ferreira Novacoski & Nicolas Justino Veiga
import Network from "./Network";


const network = new Network();

network.add("a", "b");
network.add("a", "c");
network.add("c", "d");
network.add("e", "f");
network.add("g", "e");
network.add("h", "i");

console.log("Vinicius Ferreira Novacoski & Nicolas Justino Veiga", "\n");
console.log("Subgraphs:");
console.log(network.getSubgraphs(), "\n");

console.log("Connected vertices:");
console.log(network.getConnected("a"), "\n");

console.log("Not connect vertices:");
console.log(network.getNotConnected("a"), "\n");
