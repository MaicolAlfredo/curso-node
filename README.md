# Curso de Node.js JonMircha

Indice

* [9. Hola Mundo](#9-hola-mundo-13510)
* [10. JS del navegador VS JS del servidor](#10-js-del-navegador-vs-js-del-servidor-13953)
* [11. Blocking VS Non Blocking](#11-blocking-vs-non-blocking-14748)
* [12. Single Thread](#12-single-thread-20704)
* [13. Event Loop](#13-event-loop-21841)
* [14. Módulos](#14-módulos-23202)

## 9. Hola mundo (1:35:10)
`curso-node-jonmircha` > `00_HolaMundo` > `app.js`

```js
let nombre = "Bonsh";

console.log(
  `Hola Mundo, mi nombre es ${nombre}, este es mi primer mensaje desde Node.JS `
);
```

Ejecutamos en la terminal `pwd` para saber la ubicación de la carpeta, luego cambiamos a la carpeta `00_HolaMundo` con `cd 00_HolaMundo` y ejecutamos `node app.js`

## 10. JS del navegador VS JS del servidor (1:39:53)

JavaScript en el Navegador vs JavaScript en el Servidor (Node.js)

JavaScript del navegador y JavaScript del servidor comparten el mismo lenguaje, pero se utilizan en contextos y entornos diferentes, lo que les da características y capacidades distintas.

### JavaScript en el Navegador
Este es el JavaScript que se ejecuta en el cliente, dentro del navegador web. Su propósito principal es interactuar con el documento HTML (a través del DOM), responder a eventos del usuario y manipular la interfaz de usuario.

- **Acceso al DOM**: JavaScript en el navegador puede acceder y manipular el DOM, que es la representación estructural de la página web.
- **Eventos del Usuario**: Responde a eventos como clics, desplazamientos, entradas de teclado, etc.
- **Seguridad**: Está limitado por razones de seguridad (sandboxing), es decir, no puede acceder a archivos locales ni realizar operaciones críticas en el sistema.
- **Objeto Global**: El objeto global es `window`, que representa la ventana del navegador y tiene propiedades y métodos como `alert()`, `setTimeout()`, etc.

### JavaScript en el Servidor (Node.js)
Este es el JavaScript que se ejecuta en el servidor, fuera del navegador. Su propósito es manejar solicitudes HTTP, interactuar con bases de datos, leer y escribir archivos, entre otras tareas de backend.

- **Acceso al Sistema de Archivos**: Node.js puede leer y escribir archivos, acceder al sistema operativo y realizar tareas de backend que no son posibles en el navegador.
- **Manejo de Servidores**: Node.js permite crear servidores web y manejar solicitudes HTTP directamente.
- **Módulos y Librerías**: Usa el sistema de módulos de Node.js (`require()`) para organizar y reutilizar código, y tiene acceso a un amplio ecosistema de librerías a través de `npm`.
- **Objeto Global**: El objeto global es `global`, y contiene elementos como `process` (para interactuar con el proceso de ejecución) y módulos del sistema como `fs` (sistema de archivos).

### Diferencias Clave

1. **Acceso al Entorno**: En el navegador, el acceso está limitado al DOM y a eventos del usuario, mientras que en el servidor puedes interactuar con archivos, bases de datos y el sistema operativo.
2. **Objeto Global**: En el navegador es `window`, y en Node.js es `global`.
3. **Uso**: JavaScript del navegador se usa para la interacción de la interfaz de usuario, mientras que en el servidor se usa para manejar la lógica de backend, como gestionar solicitudes y responder con datos.

Ambos entornos aprovechan las fortalezas de JavaScript, pero están diseñados para cumplir roles diferentes.

[Indice](#curso-de-nodejs-jonmircha)

## 11. Blocking VS Non Blocking (1:47:48)
Creamos un carpeta `01_CicloEventos` > `archivo.txt` + `blocking.js` + `non-blocking.js`

```
curso-node-jonmircha
└── 01_CicloEventos/
    ├── archivo.txt
    ├── blocking.js
    └── non-blocking.js
```

`archivo.txt`

```txt
***************************
Hola
Bienvenid@s al
Curso de Node.js
de jonmircha
👋🏽👋🏽👋🏽
***************************
```

`blocking.js`

```js
const fs = require("fs");

console.log("Inicio del programa");

const data = fs.readFileSync("./archivo.txt", "utf-8");

console.log(data);

console.log("Fin del programa");
```

Si ejecutamos en la terminal `node blocking.js` nos mostrará en la terminal:

```bash
Inicio del programa
***************************
Hola
Bienvenid@s al
Curso de Node.js
de jonmircha
👋🏽👋🏽👋🏽
***************************
Fin del programa
```

RECUERDA que node.js por default es asincrono.

`non-blocking.js`

```js
const fs = require("fs");

console.log("Inicio del programa");

fs.readFile("./archivo.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

console.log("Fin del programa");
```

Si ejecutamos en la terminal `node non-blocking.js` nos mostrará en la terminal:

```bash
Inicio del programa
Fin del programa
***************************
Hola
Bienvenid@s al
Curso de Node.js
de jonmircha
👋🏽👋🏽👋🏽
***************************
```

[Indice](#curso-de-nodejs-jonmircha)

## 12. Single Thread (2:07:04)
Node.js por default es un entorno de programación de un hilo único. ¿Qué significa esto? a diferencia por ejemplo de otros entornos de programación del lado del servidor, otros lenguajes como podría ser java, PHP, python algunos de estos lenguajes en su mayoría
permiten el multithreding o hacer sus procesos en diferentes hilos. Node.js es un entorno single thread es decir maneja un hilo único. Y cómo es que este hilo despacha todas estas peticiones pues justamente con el proceso no-bloqueante que te explicaba en la sección anterior.

Node.js maneja un solo hilo, pero, para evitar bloquear el proceso mientras sirve varias peticiones, utiliza un enfoque de procesamiento no-bloqueante. Esto significa que las tareas que se pueden ejecutar de inmediato, como un console.log(), pasan rápidamente por el event loop (bucle de eventos). Sin embargo, cuando Node.js encuentra tareas que requieren tiempo, como la lectura de archivos o la conexión a una base de datos, estas no se ejecutan inmediatamente. En su lugar, se envían a una callback (función de retorno) o a una pila de espera.

Estas tareas permanecen allí hasta que finalizan, y luego regresan al hilo único principal para completar su ejecución. Así, Node.js puede atender otras solicitudes mientras espera que esas tareas más largas terminen.

Aunque Node.js es single-threaded, algunos procesos pueden gestionarse con workers threads (hilos de trabajo), que simulan el multithreading en otros lenguajes. Estos hilos de trabajo permiten realizar subprocesos dentro del hilo principal, pero Node.js, en su núcleo, no fue diseñado para el multithreading, ya que está basado en el motor V8 de JavaScript de Chrome, el cual se adapta a la naturaleza de las aplicaciones web. Las aplicaciones web, normalmente, están esperando respuestas de peticiones o procesos asíncronos como consultas a bases de datos o API.

Esta estructura sencilla permite que Node.js sea muy eficiente para aplicaciones que manejan muchas peticiones, incluso si estas requieren esperas prolongadas para completar ciertas tareas.

creamos un archivo `01_CicloEventos` > `single-thread.js`

```
curso-node-jonmircha
└── 01_CicloEventos/
    ├── archivo.txt
    ├── blocking.js
    └── non-blocking.js
    └── single-thread.js
```

`single-thread.js`

```js
console.log("Inicio de Programa");

setTimeout(() => {
  console.log("Uno");
}, 3000);

setTimeout(() => {
  console.log("Dos");
}, 0);

setTimeout(() => {
  console.log("Tres");
}, 0);

console.log("Fin");
```

Si ejecutamos en la terminal `node single-thread.js` nos mostrará en la terminal:

```bash
Inicio de Programa
Fin
Dos
Tres
Uno
```

[Indice](#curso-de-nodejs-jonmircha)

## 13. Event Loop (2:18:41)
```js
const fs = require("fs");

console.log("inicio del programa");

fs.readFile("archivo.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

console.log(data);
```
## 14. Módulos (2:32:02)
Los módulos son fundamentales porque permiten aprovechar al máximo el desarrollo de aplicaciones en Node.js. Node.js trabaja de manera modular, ¿y qué es un módulo? Un módulo es un bloque de código reutilizable y encapsulado que facilita organizar y dividir las funcionalidades de nuestra aplicación en archivos o unidades más pequeñas y manejables. En lugar de tener todo el código de nuestra aplicación en un solo archivo de 10,000 líneas, lo dividimos en múltiples archivos más pequeños, lo que facilita el mantenimiento y la resolución de problemas. Si encontramos un error, en lugar de revisar un archivo enorme, simplemente identificamos el módulo que lo está causando y analizamos ese fragmento específico de código. Programar en Node.js es como jugar con piezas de Lego: interconectamos módulos individuales para construir aplicaciones más grandes y complejas.

En Node.js existen dos tipos de módulos: los módulos incorporados o nativos, que vienen incluidos en el núcleo de Node.js y están listados en su documentación oficial; y los módulos personalizados, que se dividen en dos tipos: los que tú mismo creas dentro de tu aplicación y los módulos de terceros desarrollados por la comunidad. Para gestionar estos módulos de terceros, utilizamos npm (Node Package Manager), la herramienta que viene con Node.js y es el gestor de paquetes más popular, aunque no es el único.

Ahora, ¿por qué usamos la sintaxis `require`? Existen dos sistemas de módulos en Node.js. Cuando Node.js nació en 2009, la versión de JavaScript que existía en ese momento era ECMAScript 5.1 (ES5), que carecía de muchas características modernas. La forma moderna de exportar módulos en JavaScript (usando `import` y `export`) no se introdujo hasta 2015 con ECMAScript 6 (ES6). Cuando Node.js fue creado, no había una forma estándar de manejar módulos en JavaScript, por lo que el equipo de Node.js desarrolló la sintaxis CommonJS. CommonJS es un sistema que permite exportar e importar módulos de manera eficiente, y `require` es la función que importa estos módulos. Así fue como JavaScript del lado del servidor comenzó a manejar módulos antes de la llegada de las funcionalidades modernas.
Creamos una carpeta `02_Modulos`

entonces mira aquí en lugar de traerse de importar todo el módulos de file System `fs` Pues solamente está mandando a llamar la función “readFile” `import { readFile } from "fs";` que es la que al final estamos utilizando y quiero que te des cuenta como también se simplificó el código.


`non-blocking.js`

```js
import { readFile } from "fs";

console.log("Inicio del programa");

readFile("./archivo.txt", "utf-8", (err, data) => {
  if (err) throw err;

  console.log(data);
});

console.log("Fin del programa");
```

[Indice](#curso-de-nodejs-jonmircha)