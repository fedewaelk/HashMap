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

// PRUEBA DE RESIZE
console.log("before resize:");
console.log("Length:", test.length()); // 12
console.log("Capacity:", test.capacity()); // 16

// Hago a los load levels exceder el load factor
test.set("moon", "silver");

console.log("After resize:");
console.log("Length:", test.length()); // 13
console.log("Capacity:", test.capacity()); // 32

//Más nodos sobrescritos
test.set("frog", "purple");
test.set("hat", "gray");
test.set("kite", "blue");

console.log("frog:", test.get("frog")); // "purple"
console.log("hat:", test.get("hat")); // "gray"
console.log("kite:", test.get("kite")); // "blue"

console.log(test.get("carrot")); // orange
console.log(test.get("dinosaur")); // null

console.log("Has hat:", test.has("hat")); // true

test.remove("hat");
console.log("Has hat:", test.has("hat")); //false
console.log("Length:", test.length()); // 12

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

test.clear();
console.log("Length:", test.length()); // 0
