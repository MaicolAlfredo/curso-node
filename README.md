# Curso de Node.js JonMircha

Indice
* [1. Bienvenida al curso](#1-bienvenida-al-curso-00000)
* [2. Qué es Node.js](#2-qué-es-nodejs-00619)
* [3. Historia y contexto](#3-historia-y-contexto-01400)
* [4. Características y usos ](#4-características-y-usos-02958)
* [5. Instalación y Configuración](#5-instalación-y-configuración-05450)
* [6. Node Version Manager (NVM) ](#6-node-version-manager-nvm-10806)
* [7. Versión por default en NVM](#7-versión-por-default-en-nvm-12525)
* [8. REPL](#8-repl-13112)
* [9. Hola Mundo](#9-hola-mundo-13510)
* [10. JS del navegador VS JS del servidor](#10-js-del-navegador-vs-js-del-servidor-13953)
* [11. Blocking VS Non Blocking](#11-blocking-vs-non-blocking-14748)
* [12. Single Thread](#12-single-thread-20704)
* [13. Event Loop](#13-event-loop-21841)
* [14. Módulos](#14-módulos-23202)
* [15. CommonJS ](#15-commonjs-24252)
* [16. ES Modules](#16-es-modules-25131)
* [17. NPM](#17-npm-2584)

## 1. Bienvenida al curso (0:00:00)

 Te doy la más cordial bienvenida a mi curso de Node.js. Node.js es el entorno de programación en JavaScript más popular del lado del servidor. Desde su creación en 2009, ha ganado gran popularidad y aceptación, especialmente para desarrollar aplicaciones en tiempo real que requieren una alta interacción o comunicación con otros servicios. Este entorno formalizó el uso de nuestro lenguaje favorito para la web, JavaScript, ya que ahora podemos ejecutarlo tanto en el cliente (navegadores) como en el servidor.

✅

[Indice](#curso-de-nodejs-jonmircha)

## 2. Qué es Node.js (0:06:19)
Voy a explicarte qué es Node.js, y vamos a aclarar algunos conceptos que pueden confundirse. En la página oficial, vemos que Node.js se define como un entorno de ejecución para JavaScript, construido con V8, el motor de JavaScript de Chrome. Es importante mencionar que Node.js no es un framework, aunque a veces se le confunda como tal. Para entender mejor esta diferencia, comparemos: PHP es un lenguaje de programación, y Laravel es su framework; Python es un lenguaje, y Django o Flask son sus frameworks. Ruby es un lenguaje, y Ruby on Rails es su framework. En el caso de Node.js, JavaScript es el lenguaje y Node.js es un entorno de ejecución, no un framework.

Node.js es un motor de código abierto que permite ejecutar JavaScript en el servidor, mientras que en los navegadores este código se ejecuta en el cliente. Originalmente, JavaScript fue creado en solo 13 días para Netscape Navigator en los años 90, con el objetivo de agregar dinamismo al HTML de las páginas web. A medida que JavaScript fue evolucionando, quedó claro que tenía un potencial más amplio, pero inicialmente estaba limitado a los navegadores, mientras que lenguajes como Java ya ofrecían más capacidades.

La evolución de JavaScript y Node.js nos muestra que, aunque tanto JavaScript como PHP no se diseñaron inicialmente como lenguajes de programación completos, ambos han avanzado enormemente en los últimos años, corrigiendo muchas de sus limitaciones originales. JavaScript fue pensado principalmente para el lado del cliente, y su ejecución en los navegadores depende de un motor que cada navegador incorpora, como V8 en Chrome. En 2009, un programador llamado Ryan Dahl tomó este motor V8 de código abierto y creó Node.js, permitiéndonos ejecutar JavaScript en el servidor.

Es importante diferenciar entre Node.js y frameworks específicos para desarrollo web basados en Node.js, como Express, Koa, o Nest.js. Node.js es un entorno de ejecución que habilita JavaScript en el servidor, mientras que estos frameworks se construyen sobre Node.js para facilitar el desarrollo web.

Otros entornos de ejecución para JavaScript del lado del servidor incluyen Deno, creado también por Ryan Dahl en 2018 como una evolución de Node.js. Aunque tiene mejoras significativas, Deno no ha logrado la misma popularidad en el ámbito profesional que Node.js. Otro entorno de ejecución es Bun, creado en 2021 por el programador ruso Jarred Sumner. Al igual que Deno, Bun busca proporcionar un entorno de ejecución más eficiente para JavaScript en el servidor.

Para entender mejor, podemos comparar con el lado del cliente: frameworks y bibliotecas como React, Vue, Svelte, y Angular compiten entre sí en el desarrollo web en el navegador. En cambio, los entornos de ejecución como Node.js, Deno, y Bun permiten ejecutar JavaScript en el servidor.

Entonces, en resumen, JavaScript es el lenguaje, los entornos de ejecución son Node.js, Deno y Bun, y los frameworks que construimos sobre estos entornos (como Express en Node.js) facilitan el desarrollo web.

Con esto claro, en el curso profundizaremos en Node.js, sus características y ventajas. Aprenderás a diferenciar entre un framework, una librería y un entorno de ejecución, entendiendo cómo Node.js lleva JavaScript del navegador al servidor. ¡Nos vemos en la próxima sección!
✅

[Indice](#curso-de-nodejs-jonmircha)

## 3. Historia y contexto (0:14:00)
Después de haber explicado qué es Node.js, y la diferencia entre un entorno de ejecución y un framework, ahora quiero hablarles sobre la historia de Node.js. Comencemos por el 2009, cuando en la conferencia JSConf en Berlín, Ryan Dahl presentó su idea. Dahl trabajaba en una empresa de infraestructura en la nube, y en esos años, hablar de servicios en la nube era algo nuevo, aún emergente, a diferencia de la familiaridad que tenemos hoy con plataformas como Azure, AWS o Google Cloud.

La innovación de Dahl consistió en tomar el motor V8 de JavaScript, usado por el navegador Chrome para ejecutar JavaScript de forma rápida, y adaptarlo para el lado del servidor. Esto incluyó el desarrollo de una capa de red basada en la entrada y salida de datos asincrónica, la cual llamó Node.js. Internamente, el motor de Node.js está compuesto aproximadamente en un 80% por código C++ y el resto en JavaScript. Node.js se lanzó oficialmente en 2009, y su enfoque en un modelo no bloqueante y asincrónico revolucionó el desarrollo de aplicaciones en tiempo real como chats y notificaciones, algo que en ese entonces no era común.

Con Node.js también llegó npm (Node Package Manager), un gestor de paquetes que permitió a los desarrolladores compartir y utilizar librerías de manera sencilla. Gracias a su popularidad, grandes empresas como LinkedIn, PayPal, Netflix y Walmart comenzaron a integrar Node.js en algunas de sus aplicaciones y servicios.

El desarrollo de Node.js fue inicialmente lento. Dahl tardó dos o tres años en avanzar de la versión 0 a la versión 1, ya que tenía compromisos laborales y no podía dedicar todo su tiempo a Node.js. Durante este periodo, la comunidad comenzó a colaborar, creando un fork llamado io.js. Esta bifurcación añadió nuevas características y aceleró el desarrollo.

En el 2015, se logró la fusión de io.js y Node.js con el apoyo de la Fundación Linux, formando la Node.js Foundation. Esta unión consolidó el proyecto y permitió un desarrollo más ágil, eliminando barreras comerciales que limitaban el crecimiento de Node.js. El 2015 fue un año clave para JavaScript, ya que no solo Node.js se estabilizó, sino que también se publicó el estándar ECMAScript 2015 (ES6), introduciendo mejoras significativas en el lenguaje. Esto estableció un compromiso de actualización anual para JavaScript.

A partir de ese año, JavaScript y Node.js se volvieron opciones sólidas para el desarrollo de aplicaciones isomórficas, aquellas que pueden ejecutarse tanto en el cliente como en el servidor usando el mismo lenguaje. Esto marcó el inicio del auge de stacks como MEAN (MongoDB, Express, Angular, Node.js) y MERN (MongoDB, Express, React, Node.js), abriendo las puertas a un nuevo nivel de desarrollo multiplataforma con JavaScript.

En conclusión, la historia de Node.js es una pieza fundamental del crecimiento de JavaScript en el desarrollo moderno. En la siguiente sección, exploraremos cómo Node.js influye en las tres áreas clave de una aplicación: frontend, backend y bases de datos.

✅

[Indice](#curso-de-nodejs-jonmircha)

## 4. Características y usos (0:29:58)

Node.js y su Importancia en el Desarrollo Web
Node.js fue creado por Ryan Dahl con el objetivo de permitir la ejecución de JavaScript en el servidor, utilizando un sistema de entrada/salida no bloqueante y basado en eventos. Esto permite que Node.js maneje múltiples solicitudes concurrentes de manera eficiente y escalable, lo cual es ideal para aplicaciones en tiempo real y de alto rendimiento. La primera versión de Node.js se construyó sobre el motor V8 de Chrome, con aproximadamente 8,000 líneas de código en C y C++ y 2,000 en JavaScript.

Características Principales de Node.js
1. Uso de JavaScript en el Servidor: Node.js facilita el desarrollo de aplicaciones isomórficas, donde se utiliza el mismo lenguaje en el cliente y en el servidor. Esto permite una coherencia en la tecnología, evitando la necesidad de múltiples lenguajes en diferentes capas (como PHP en el backend y JavaScript en el frontend).
2. Modelo No Bloqueante y Asíncrono: Node.js usa un modelo de entrada/salida sin bloqueo basado en eventos, lo cual permite que las aplicaciones manejen múltiples solicitudes sin que unas bloqueen a otras. Esto es crucial para crear aplicaciones escalables y eficientes.
3. Escalabilidad y Velocidad: Gracias a su arquitectura no bloqueante, Node.js es ideal para aplicaciones en tiempo real que requieren un alto rendimiento y escalabilidad, incluyendo la posibilidad de arquitectura basada en microservicios.
4. Comunidad Activa y Ecosistema Amplio: La comunidad de Node.js es una de las más activas y ha contribuido extensamente al crecimiento de su ecosistema. A pesar de una breve pausa en su desarrollo, la comunidad se unió para crear una versión bifurcada (fork) que permitió la continuidad del proyecto. 
5. Facilidad para Manejo de Solicitudes HTTP: Node.js incluye un módulo HTTP que permite crear servidores web rápidamente y manejar solicitudes y respuestas. Esto facilita el desarrollo de APIs RESTful y la integración con arquitecturas MVC.
6. Compatibilidad Multiplataforma: Node.js se puede instalar en sistemas operativos Windows, macOS y Linux, lo que lo hace accesible y versátil para desarrolladores en distintas plataformas.

Integración con Bases de Datos
Node.js ha impulsado el uso de bases de datos NoSQL, especialmente aquellas que utilizan estructuras de datos de estilo JavaScript, como MongoDB. Gracias a su estructura de objetos en JavaScript, es fácil integrarlo tanto con bases de datos NoSQL como relacionales (MySQL, PostgreSQL, MariaDB), y su sintaxis sencilla facilita el desarrollo de APIs que exponen datos en formato JSON, un formato muy compatible con la mayoría de los clientes.

Uso en el Frontend
En el frontend, Node.js es fundamental en el ecosistema moderno, especialmente con la aparición de frameworks y librerías como React, Angular y Vue. Estos frameworks requieren entornos de desarrollo locales que se ejecutan en Node.js y que facilitan tareas como la gestión de dependencias y la construcción de aplicaciones. NPM, el gestor de paquetes de Node.js, permite instalar y ejecutar rápidamente bibliotecas y frameworks en proyectos frontend.

Middleware y Procesamiento en Tiempo Real

Node.js también se utiliza como middleware, actuando como un intermediario entre el modelo de datos y el desarrollo frontend. Esto es útil para validaciones y transformaciones de datos antes de pasarlos a la base de datos o al frontend. En cuanto al procesamiento en tiempo real, Node.js es excelente para manejar comunicaciones bidireccionales gracias a librerías como Socket.io, que permiten la creación de canales de comunicación en tiempo real entre cliente y servidor.

Testing y Desarrollo de Pruebas

Node.js también soporta una gran variedad de entornos de pruebas, como Jest, Mocha y Chai, que facilitan el desarrollo de pruebas unitarias y de integración, esenciales para garantizar la calidad y estabilidad de las aplicaciones.

✅

[Indice](#curso-de-nodejs-jonmircha)

## 5. Instalación y Configuración (0:54:50)
Para instalar Node.js, tienes varias opciones según el sistema operativo: Windows, Mac o el código fuente para Linux. Sin embargo, la instalación básica que encuentras en la página oficial de descargas de Node.js no es la más recomendada. Esto se debe a que la versión que instalarías de esta forma es una "Stand Alone" o "independiente". Es decir, solo tendrás instalada una versión específica de Node.js en tu sistema. Por ejemplo, si instalas la versión 18.17.0, y luego necesitas actualizar a la versión 20.5, tendrás que realizar el proceso de instalación nuevamente, lo cual no es muy práctico.

Es importante poder manejar varias versiones de Node.js en tu computadora, especialmente si trabajas en proyectos diferentes que requieren versiones distintas. Imagínate que desarrollas una aplicación hoy con la versión 18, pero en uno o dos años necesitas actualizar o realizar cambios en la misma aplicación. Si solo tienes instalada la última versión de Node.js, es posible que enfrentes problemas de compatibilidad con el código o las dependencias más antiguas.

Para resolver este inconveniente, la comunidad de Node.js desarrolló una herramienta llamada NVM (Node Version Manager). Con NVM, puedes instalar y gestionar múltiples versiones de Node.js en tu equipo. Esto es ideal para desarrolladores que trabajan en varios proyectos con requisitos de versión específicos.

### Instalación de NVM
En Windows, las instalaciones suelen tener algunas diferencias, por lo que existen dos repositorios en GitHub que te serán útiles. El primer repositorio, NVM, está pensado originalmente para sistemas Mac y Linux. Si revisas el repositorio de NVM, verás que las instrucciones para instalarlo incluyen comandos para terminal como curl o wget, que son más comunes en esos sistemas.

Como respuesta a la necesidad de los usuarios de Windows, surgió el proyecto NVM for Windows. Este proyecto es un fork de NVM que permite a los usuarios de Windows instalar y cambiar versiones de Node.js con facilidad. Solo necesitas descargar el instalador desde el repositorio, ejecutarlo, y podrás instalar y gestionar versiones de Node.js cómodamente en tu sistema Windows.

Una vez instalado NVM, podrás cambiar entre diferentes versiones de Node.js con el comando:

```bash
nvm use [versión]
```

Esto es especialmente útil si eres un desarrollador que trabaja en proyectos a largo plazo. Solo necesitas recordar la versión de Node.js con la que trabajabas en cada proyecto, y puedes alternar entre ellas sin preocuparte por problemas de compatibilidad.

### Diferencias entre las versiones actual y LTS
Cuando instalas Node.js, tienes dos opciones de versión: la versión actual y la versión LTS. "LTS" significa "Long-Term Support" (Soporte a Largo Plazo), un término común en el desarrollo de software que implica que dicha versión recibirá actualizaciones de seguridad y mantenimiento durante un periodo prolongado (generalmente, tres años en Node.js).

La versión actual, en cambio, es la versión más reciente y contiene las últimas características, pero puede tener actualizaciones frecuentes. Si desarrollas una aplicación para producción, es recomendable optar por una versión LTS para asegurar estabilidad a largo plazo, ya que las versiones LTS pasan por un riguroso mantenimiento y pruebas antes de ser publicadas.

En resumen:

* Versión Actual: Incluye las últimas funcionalidades, ideal para explorar nuevas características.
* Versión LTS: Recomendable para aplicaciones en producción, ya que garantiza estabilidad y soporte.

Con esta configuración, podrás experimentar nuevas características y mantener tus proyectos estables sin problemas de compatibilidad.
✅

[Indice](#curso-de-nodejs-jonmircha)

## 6. Node Version Manager (NVM) (1:08:06)
Antes de pasar a mostrar cómo se utiliza Node.js con NVM, quiero hacer un paréntesis importante. A veces, algunos usuarios experimentan problemas al instalar NVM en Windows, lo cual puede depender de la versión de Windows, el tipo de sistema, o alguna característica del equipo. A diferencia de sistemas como macOS, que tiene una arquitectura única, Windows cuenta con diversas configuraciones de hardware y software que pueden afectar la instalación.

En el repositorio oficial de NVM, que es compatible solo con Linux y macOS, puedes encontrar una sección titulada "Notas importantes" que menciona que NVM no está disponible para Windows. Sin embargo, existen versiones alternativas de NVM para Windows, como NVM-For-Windows, que he incluido en la descripción. Si esta opción no funciona, en el repositorio oficial también se recomiendan otros gestores de versiones para Node.js en Windows, como Nodist o nvs, que nacieron precisamente para suplir esta necesidad.

```bash
nvm -v

nvm list

node -v

nvm use v18.13.0

npm -v

nvm install v18.17.0

nvm uninstall v18.7.0
```

✅

[Indice](#curso-de-nodejs-jonmircha)

## 7. Versión por default en NVM (1:25:25)

Creamos una carpeta General `curso-node-jonmircha`

Un detalle importante: es probable que cuando cerraste el proceso de nvm, hayas notado que la versión que tienes por defecto se mantiene activa. En la sección anterior, dejamos configurada la versión 18.17.0 (la última LTS disponible al momento de grabar este video). Si ahora ejecuto `node -v`, verás que la versión actual es la 16.17.0, ya que es la primera versión que instalé en este equipo.

Recuerda que cuando expliqué cómo usar `nvm`, configuramos esta versión como predeterminada, algo que puedes identificar gracias a la flecha que la indica. Aquí tienes un consejo: si deseas que otra versión sea la predeterminada, puedes establecerlo fácilmente. Por ejemplo, para cambiar a la versión 18.17.0, solo necesitas ejecutar `nvm use 18.17.0`. Después de esto, si ejecuto `node -v`, verás que ahora me muestra esta versión.

Sin embargo, al cerrar y volver a abrir la terminal, regresará automáticamente a la versión predeterminada, que en este caso es la 16.17.0. Esto puede ser incómodo si deseas trabajar constantemente con una versión en particular. Si buscas ayuda sobre los comandos de `nvm`, solo necesitas escribir `nvm` y presionar Enter para ver la lista completa.

En `nvm`, existen dos maneras de establecer una versión por defecto:

1. Usar el comando `nvm alias default node`, que establecerá automáticamente la última versión disponible en tu equipo como la predeterminada.
2. Para designar una versión específica como la predeterminada (como la versión LTS 18.17.0), usa `nvm alias default 18.17.0`.

Por ejemplo, si ejecutas `nvm alias default node`, y la última versión en tu equipo es la 20, esta será la predeterminada. Si prefieres la versión 18.17.0, simplemente ejecuta `nvm alias default 18.17.0`. Luego de establecer esta versión, al abrir una nueva terminal y ejecutar `node -v`, verás que la versión por defecto será la 18.17.0 en lugar de la última versión instalada.

Así es como puedes asignar una versión específica o la última disponible como predeterminada en `nvm`.

[Indice](#curso-de-nodejs-jonmircha)

## 8. REPL (1:31:12)
Casi todos los lenguajes de programación tienen su propio REPL (Read-Eval-Print Loop), que en español significa ciclo de leer, evaluar e imprimir. Esta herramienta interactiva permite a los desarrolladores ejecutar y probar código en el lenguaje en el que estén trabajando. Por ejemplo, Python y PHP tienen sus propios REPLs, y Node.js también cuenta con uno.

Para acceder al REPL de Node.js, simplemente escribe `node` en la terminal. Verás un mensaje de bienvenida que indica la versión de Node.js que estás usando (por ejemplo, 18.17.0) y muestra un aviso para obtener ayuda adicional escribiendo `.help`. Al escribir `.help`, verás una lista de comandos útiles que puedes ejecutar dentro del REPL.

El REPL de Node.js funciona de manera similar a la consola de desarrollador de los navegadores en JavaScript. Por ejemplo, en el navegador, si haces clic derecho, seleccionas "Inspeccionar" y abres la consola, puedes empezar a ejecutar código de JavaScript directamente.

Al igual que en la consola de navegador, el REPL te permite probar y verificar rápidamente tu código. Esto es especialmente útil para realizar pruebas rápidas o verificar el comportamiento de ciertas funciones.

Para salir del REPL, puedes usar varios métodos. La opción más común es presionar `Ctrl + C` dos veces, pero también puedes usar `Ctrl + D` o el comando `.exit`. Estos comandos se muestran en la ayuda que proporciona el REPL. También existe el comando `.save`, que permite guardar la sesión, aunque para proyectos más avanzados es recomendable trabajar directamente en archivos de código.

✅

[Indice](#curso-de-nodejs-jonmircha)

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
Cuando hablamos de cómo escribir código en Node.js, gran parte de la sintaxis básica de JavaScript en el navegador se mantiene. Puedes declarar variables, constantes, funciones, usar condicionales, operadores, ciclos y hasta manejar asincronía. Todo lo que sueles hacer en JavaScript en un navegador es posible también en Node.js. Sin embargo, hay ciertas limitaciones y diferencias importantes, como la imposibilidad de interactuar con el DOM, la API del navegador que permite manipular el contenido HTML y CSS.

Por ejemplo, en la consola de un navegador, si escribes `window`, obtendrás el objeto global `window`, que representa la ventana del navegador. Similarmente, `document` se refiere al nodo DOM, mostrando la estructura del `document`o HTML. En cambio, si intentas usar `document` o `window` en el entorno de Node.js (por ejemplo, en la consola interactiva REPL de Node), recibirás un "ReferenceError", ya que estos objetos no existen fuera del navegador.

En Node.js, sin embargo, tenemos otros objetos específicos del entorno del servidor, como `process`, que proporciona información sobre el proceso actual de Node, y `global`, que es el equivalente al objeto `window` en el navegador. Así que mientras el objeto `window` es `global` en el navegador, en Node.js el objeto global es `global`, y contiene todos los datos relacionados con el entorno de Node.

Bloqueante vs. No Bloqueante en Node.js
Para comprender cómo maneja Node.js las operaciones de entrada y salida (I/O), es esencial conocer los conceptos de "bloqueante" y "no bloqueante". Una operación de I/O puede incluir la lectura y escritura de archivos, solicitudes HTTP, conexiones de red, consultas a bases de datos, o cualquier acción que requiera esperar una respuesta.

En modo bloqueante (síncrono), cada tarea debe completarse antes de pasar a la siguiente. Por ejemplo, si tienes una lista de operaciones, Node.js procesará una por una hasta terminar la actual. Esto puede resultar en una ejecución lenta si una tarea es intensiva o requiere esperar una respuesta externa.

Ejemplo en el Mundo Real: El Restaurante
Imagina un restaurante donde los comensales representan el código bloqueante, y los meseros y cocineros representan el código no bloqueante. Un comensal, al ser bloqueante, espera a terminar cada plato antes de recibir el siguiente. Primero recibe la entrada, luego la sopa, después el plato fuerte, y así sucesivamente. Este es un proceso secuencial, como el código bloqueante en programación.

Por otro lado, los meseros y cocineros trabajan de forma no bloqueante. El mesero lleva la carta a una mesa, luego entrega el postre a otra y trae la bebida a una tercera. No espera a que los comensales terminen un plato para pasar al siguiente. Similarmente, en Node.js, una operación puede iniciarse y, mientras espera por su finalización (como recibir una respuesta de una API), el sistema puede ejecutar otras operaciones.

Este modelo de procesamiento no bloqueante es clave para el alto rendimiento de Node.js y permite que funcione de manera eficiente incluso en entornos con múltiples operaciones I/O.

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

Antes de profundizar en el event loop, observa que hay una biblioteca llamada libuv. Esta es una librería escrita en C, desarrollada por el equipo de Joyent, la empresa donde trabajaba Ryan Dahl, el creador de Node.js. Libuv provee abstracciones para manejar operaciones de entrada y salida de forma asíncrona, siendo responsable del 80% del código de Node.js, el cual está escrito en C (el otro 20% es JavaScript). Esta biblioteca es esencial para que Node.js maneje las peticiones asíncronas.

Desglose del Event Loop en el GIF
En la primera imagen del GIF, verás el código que estamos ejecutando y la estructura del motor V8 de JavaScript en Chrome (el mismo en el que se basa Node.js). En el lado izquierdo, tenemos la pila de llamadas (call stack), que es donde se ejecutan las funciones. A la derecha, está la API de libuv, que permite manejar las tareas asíncronas, y abajo se encuentra la cola de eventos (event queue), donde se almacenan las tareas pendientes para su ejecución cuando el call stack esté libre.

Explicación del Código Paso a Paso
1. Primero, almacenamos el módulo fs en una variable. Al ejecutarse la línea require('fs'), se carga el módulo en memoria y se guarda en la pila de llamadas. Esta es una tarea síncrona, por lo que se carga y luego se libera la pila.

2. Luego, imprimimos "Inicio del programa" en la consola con console.log, que también es una operación síncrona. Esto se ejecuta de inmediato y muestra el mensaje en consola.

3. A continuación, pasamos a la lectura de un archivo con fs.readFile. A diferencia de fs.readFileSync (que es síncrona), esta función es asíncrona. Esto significa que la llamada no se detiene hasta que se lea todo el archivo, sino que el callback (función de retorno) se gestiona en segundo plano por la API de libuv y el call stack queda libre para seguir ejecutando las siguientes tareas.

4. Después, se ejecuta otro console.log para imprimir "Fin del programa" en la consola. Dado que la lectura del archivo es asíncrona y se gestiona por separado, este console.log se ejecuta inmediatamente y aparece antes de que se complete la lectura del archivo.

5. Una vez que libuv ha completado la lectura del archivo, el callback asociado pasa a la cola de eventos (event queue). Aquí, el event loop evalúa si la pila de llamadas está vacía. Si es así, toma el callback de la cola de eventos y lo ejecuta, imprimiendo finalmente el contenido del archivo en la consola.


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
<<<<<<< HEAD


## 15. CommonJS (2:42:52)

creamos dentro de la carpeta `02_Modulos` > `CommonJS` > `app.js` + `calculadora.js` ^ `ESModules`

```
└── 02_Modulos
    ├── CommonJS
    │   ├── app.js
    │   └── calculadora.js
    └── ESModules
```

En calculadora.js vamos a crear cuatro funciones para realizar operaciones aritméticas básicas: sumar, restar, multiplicar y dividir, además de obtener el módulo (o residuo). Recuerda que el módulo es la quinta operación aritmética más importante, además de las cuatro tradicionales.

Para simplificar la escritura, utilizaremos funciones flecha (arrow functions). No validaremos el tipo de datos; simplemente definiremos que las funciones reciben dos parámetros, a y b.

Luego, crearemos un objeto llamado calculadora, donde asignaremos estas funciones como métodos: sumar, restar, multiplicar, dividir y modulo. Gracias a las características modernas de JavaScript, podemos simplificar la escritura cuando las claves del objeto son idénticas a los nombres de las funciones.

Para exportar este módulo en CommonJS, usaremos module.exports. Simplemente asignamos calculadora a module.exports, lo que permitirá que calculadora esté disponible en otros archivos. En app.js, el archivo principal, importaremos el módulo con require.
`calculadora.js`

```js
const sumar = (a, b) => a + b,
  restar = (a, b) => a - b,
  multiplicar = (a, b) => a * b,
  dividir = (a, b) => a / b,
  modulo = (a, b) => a % b,
  calculadora = {
    sumar,
    restar,
    multiplicar,
    dividir,
    modulo,
  };

module.exports = calculadora;
```
### Código en app.js

Crearemos una constante calculadora y la inicializaremos con el resultado de require, indicando la ruta al archivo calculadora.js. Dado que calculadora.js está en la misma carpeta, basta con poner ./calculadora.

Definimos una variable c que simplifica el uso de console.log. Así, en lugar de escribir console.log cada vez, simplemente usaremos c para imprimir los resultados.
`app.js`

```js
const calculadora = require("./calculadora"),
  c = console.log;

c(calculadora.sumar(2, 4));
c(calculadora.restar(2, 4));
c(calculadora.multiplicar(2, 4));
c(calculadora.dividir(4, 2));
c(calculadora.modulo(4, 2));
```

Si ejecutamos en la terminal `node app.js` nos mostrará en la terminal:

```bash
6
-2
8
2
0
```
[Indice](#curso-de-nodejs-jonmircha)

## 16. ES Modules (2:51:31)

creamos dentro de la carpeta `02_Modulos` > `ESModules` > `app.js` + `calculadora.js`

```
└── 02_Modulos
    ├── CommonJS
    │   ├── app.js
    │   └── calculadora.js
    └── ESModules
        ├── app.js
        └── calculadora.js
```

`calculadora.js`

```js
const sumar = (a, b) => a + b,
  restar = (a, b) => a - b,
  multiplicar = (a, b) => a * b,
  dividir = (a, b) => a / b,
  modulo = (a, b) => a % b;

export const calculadora = {
  sumar,
  restar,
  multiplicar,
  dividir,
  modulo,
};
```

`app.js`

```js
import { calculadora } from "./calculadora.mjs";
const c = console.log;

c(calculadora.sumar(2, 4));
c(calculadora.restar(2, 4));
c(calculadora.multiplicar(2, 4));
c(calculadora.dividir(4, 2));
c(calculadora.modulo(4, 2));
```

Si ejecutamos en la terminal `node app.js` nos mostrará en la terminal un error:

```bash
Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

SyntaxError: Cannot use import statement outside a module
```
Este mensaje de advertencia aparece en Node.js cuando intentas cargar un módulo ES (ECMAScript Module, como el que usa `import/export` en lugar de `require()`) sin configurar correctamente el entorno para manejar este tipo de módulos.
### ¿Por qué sucede?
Por defecto, Node.js asume que estás usando el formato de módulos CommonJS (que usa `require()` para importar módulos). Si deseas usar ES Modules (que utilizan `import` y `export`), debes indicarle a Node.js que debe tratarlos de esa manera.
### ¿Cómo solucionar el problema?
Tienes dos opciones para hacerlo:

Opción 1: Configurar `package.json`

Puedes agregar `"type": "module"` en tu archivo package.json. Esto le dice a Node.js que todo el proyecto debe ser tratado como un proyecto de ES Modules.

Opción 2: Usar la extensión .mjs
Si no quieres cambiar el package.json, otra opción es cambiar la extensión de los archivos que usan módulos ES a .mjs (en lugar de .js).

Ejemplo: Si tienes un archivo index.js, renómbralo a index.mjs, y Node.js sabrá que debe tratarlo como un módulo ES. Esto funciona aunque no hayas configurado el package.json.

Renombramos nuestro archivo `calculadora.js` a `calculadora.mjs` y tambien lo hacemos en `app.js` a `app.mjs`

volvemos a ejecutar `node app.js`

Si ejecutamos en la terminal `node app.js` nos mostrará en la terminal:

```bash
6
-2
8
2
0
```
[Indice](#curso-de-nodejs-jonmircha)

## 17. NPM (2:58:41)

Creamos una carpeta `03_NPM`
NPM, el Node Package Manager (administrador de paquetes de Node.js). Como mencioné al inicio del curso, NPM es el administrador de paquetes predeterminado para Node.js. ¿Por qué es predeterminado? Porque se incluye automáticamente al instalar Node.js. Aunque existen otros administradores de paquetes, NPM es el oficial y es el más ampliamente utilizado en la comunidad de Node.js.

¿Para qué sirve NPM? Como recordarán, cuando expliqué los módulos, mencioné que existen módulos "core" (nativos), es decir, aquellos incluidos en la instalación de Node.js, y también los módulos personalizados. Estos últimos pueden ser módulos que creamos nosotros mismos, como el de la calculadora que vimos anteriormente, o módulos creados por la comunidad y disponibles para su uso a través de NPM.

En el desarrollo profesional con Node.js, es muy común apoyarse en estos módulos para cubrir diversas necesidades de la aplicación. Aquí es donde NPM se convierte en un recurso esencial, ya que actúa como una gran comunidad de código abierto en la que cualquier persona, incluida tú, puede crear una cuenta, publicar un paquete y compartirlo con otros usuarios. De este modo, NPM permite compartir y reutilizar código de manera efectiva.
```
└── 00_HolaMundo
└── 01_CicloEventos
└── 02_Modulos
└── 03_NPM
```
[Indice](#curso-de-nodejs-jonmircha)
=======
>>>>>>> refs/remotes/origin/main
