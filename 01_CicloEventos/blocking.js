const fs = require("fs");

console.log("Inicio del programa");

const data = fs.readFileSync("./archivo.txt", "utf-8");

console.log(data);

console.log("Fin del programa");
