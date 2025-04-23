import { HashMap } from "./hashMap.mjs";

const test = HashMap(); // ← load factor ya es 0.75 por defecto

test.set("apple", "red");
test.set("banana", "yellow");
test.set("carrot", "orange");
test.set("dog", "brown");
test.set("elephant", "gray");
test.set("frog", "green");
test.set("grape", "purple");
test.set("hat", "black");
test.set("ice cream", "white");
test.set("jacket", "blue");
test.set("kite", "pink");
test.set("lion", "golden");

// Guardo el largo original
const originalLength = test.length();

// Sobrescribo algunos valores existentes
test.set("elephant", "pink");
test.set("grape", "green");
test.set("jacket", "black");

// Verifico que el largo no haya cambiado
console.log("Same length:", test.length() === originalLength); // true
console.log("elephant:", test.get("elephant")); // "pink"
console.log("grape:", test.get("grape")); // "green"
console.log("jacket:", test.get("jacket")); // "black"
