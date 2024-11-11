import { parse } from "url";

const urlString =
  "https://www.ejemplo.com:8080/ruta?parametro1=valor1&parametro2=valor2";

const parsedURL = parse(urlString, true);

console.log("Protocolo:", parsedURL.protocol);
console.log("Hostname:", parsedURL.hostname);
console.log("Pathname:", parsedURL.pathname);
console.log("Parámetros de consulta:", parsedURL.query);
