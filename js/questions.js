const questionsData = [
    // ================= FÁCIL (25 PREGUNTAS) =================
    {
        id: 1,
        diff: "Fácil",
        cat: "HTML",
        q: "¿Cuál es la etiqueta HTML5 correcta para definir la cabecera principal de un sitio web o sección?",
        opts: ["<header>", "<head>", "<top>", "<navbar>"],
        ans: 0,
        exp: "La etiqueta <header> en HTML5 representa un grupo de soporte introductorio o de navegación."
    },
    {
        id: 2,
        diff: "Fácil",
        cat: "HTML",
        q: "¿Qué atributo se utiliza en HTML para dar una descripción alternativa a una imagen por accesibilidad?",
        opts: ["title", "src", "alt", "description"],
        ans: 2,
        exp: "El atributo 'alt' (texto alternativo) especifica un texto para ser mostrado cuando la imagen no carga o para lectores de pantalla."
    },
    {
        id: 3,
        diff: "Fácil",
        cat: "CSS",
        q: "¿Qué propiedad de CSS se utiliza para cambiar el color del texto de un elemento?",
        opts: ["text-color", "color", "font-color", "background-color"],
        ans: 1,
        exp: "La propiedad 'color' define el color del texto en CSS."
    },
    {
        id: 4,
        diff: "Fácil",
        cat: "CSS",
        q: "En el modelo de caja de CSS (Box Model), ¿cuál es el espacio interno entre el contenido y el borde?",
        opts: ["margin", "padding", "border", "outline"],
        ans: 1,
        exp: "Padding es el espacio de relleno entre el contenido del elemento y su borde."
    },
    {
        id: 5,
        diff: "Fácil",
        cat: "JavaScript",
        q: "¿Cuál de las siguientes formas es la adecuada en ES6+ para declarar una variable que no se puede reasignar?",
        opts: ["var", "let", "const", "static"],
        ans: 2,
        exp: "'const' crea una referencia de solo lectura a un valor en un alcance (scope) de bloque."
    },
    {
        id: 6,
        diff: "Fácil",
        cat: "JavaScript",
        q: "¿Qué operador devuelve la igualdad estricta evaluando tanto el valor como el tipo de dato en JavaScript?",
        opts: ["==", "=", "===", "=="],
        ans: 2,
        exp: "El operador === (igualdad estricta) no realiza conversión de tipo al comparar."
    },
    {
        id: 7,
        diff: "Fácil",
        cat: "JavaScript",
        q: "¿Cómo se imprime un mensaje informativo en la consola del navegador usando JS?",
        opts: ["console.print()", "console.log()", "print.log()", "document.write()"],
        ans: 1,
        exp: "console.log() es el método estándar para emitir mensajes a la consola web."
    },
    {
        id: 8,
        diff: "Fácil",
        cat: "Python",
        q: "¿Qué función nativa de Python se usa para obtener la longitud de una lista o cadena?",
        opts: ["length()", "size()", "count()", "len()"],
        ans: 3,
        exp: "len() devuelve el número de elementos de un objeto iterable en Python."
    },
    {
        id: 9,
        diff: "Fácil",
        cat: "Python",
        q: "¿Cómo se definen los bloques de código y control de flujo en Python?",
        opts: ["Con llaves {}", "Con indentación (sangría)", "Con palabras clave end", "Con corchetes []"],
        ans: 1,
        exp: "Python utiliza la indentación (espacios en blanco) para definir la estructura y bloques de código."
    },
    {
        id: 10,
        diff: "Fácil",
        cat: "Git & GitHub",
        q: "¿Qué comando de Git inicializa un nuevo repositorio local en el directorio actual?",
        opts: ["git create", "git new", "git init", "git start"],
        ans: 2,
        exp: "git init crea un repositorio Git nuevo y vacío o reinicializa uno existente."
    },
    {
        id: 11,
        diff: "Fácil",
        cat: "Git & GitHub",
        q: "¿Cuál es el comando para preparar (stage) todos los archivos modificados antes de hacer un commit?",
        opts: ["git push .", "git save .", "git add .", "git commit -a"],
        ans: 2,
        exp: "'git add .' agrega todos los cambios del directorio actual al área de preparación (Staging Area)."
    },
    {
        id: 12,
        diff: "Fácil",
        cat: "POO",
        q: "En Programación Orientada a Objetos, ¿qué representa la 'plantilla' o molde a partir de la cual se crean objetos?",
        opts: ["Método", "Instancia", "Clase", "Atributo"],
        ans: 2,
        exp: "Una Clase es una plantilla o modelo abstracto a partir del cual se instancian los objetos."
    },
    {
        id: 13,
        diff: "Fácil",
        cat: "POO",
        q: "¿Cuáles son los 4 pilares fundamentales de la Programación Orientada a Objetos?",
        opts: [
            "Variables, Bucles, Funciones y Arreglos",
            "Abstracción, Encapsulamiento, Herencia y Polimorfismo",
            "HTML, CSS, JS y Python",
            "Clases, Métodos, Instancias y Repositorios"
        ],
        ans: 1,
        exp: "Los 4 pilares centrales de la POO son Abstracción, Encapsulamiento, Herencia y Polimorfismo."
    },
    {
        id: 14,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "En el estándar SPICE (ISO/IEC 15504), ¿cuántos niveles de capacidad de proceso se definen (del Nivel 0 al 5)?",
        opts: ["4 niveles", "5 niveles", "6 niveles", "10 niveles"],
        ans: 2,
        exp: "SPICE define 6 niveles de capacidad: Nivel 0 (Incompleto), 1 (Realizado), 2 (Gestionado), 3 (Establecido), 4 (Predecible) y 5 (En optimización)."
    },
    {
        id: 15,
        diff: "Fácil",
        cat: "HTML",
        q: "¿Qué etiqueta de HTML5 se utiliza para incluir un código de JavaScript externo o embebido?",
        opts: ["<javascript>", "<script>", "<js>", "<code.js>"],
        ans: 1,
        exp: "La etiqueta <script> se utiliza para insertar o hacer referencia a scripts ejecutables."
    },
    {
        id: 16,
        diff: "Fácil",
        cat: "CSS",
        q: "¿Qué unidad de medida en CSS es relativa al tamaño de fuente del elemento raíz (<html>)?",
        opts: ["px", "em", "rem", "vh"],
        ans: 2,
        exp: "rem significa 'root em' y su tamaño es proporcional al font-size del elemento raíz <html>."
    },
    {
        id: 17,
        diff: "Fácil",
        cat: "JavaScript",
        q: "¿Cuál es el tipo de dato devuelto por la expresión `typeof NaN` en JavaScript?",
        opts: ["'number'", "'undefined'", "'NaN'", "'object'"],
        ans: 0,
        exp: "En JavaScript, NaN (Not a Number) es técnicamente un tipo de dato numérico según la especificación IEEE 754."
    },
    {
        id: 18,
        diff: "Fácil",
        cat: "Python",
        q: "¿Qué palabra clave se usa para definir una función en Python?",
        opts: ["function", "func", "def", "lambda"],
        ans: 2,
        exp: "La palabra reservada 'def' inicia la declaración de una función en Python."
    },
    {
        id: 19,
        diff: "Fácil",
        cat: "Git & GitHub",
        q: "¿Qué comando de Git envía los commits de tu repositorio local al repositorio remoto en GitHub?",
        opts: ["git pull", "git fetch", "git push", "git upload"],
        ans: 2,
        exp: "'git push' actualiza las referencias remotas junto con los objetos asociados."
    },
    {
        id: 20,
        diff: "Fácil",
        cat: "POO",
        q: "¿Qué método especial se ejecuta automáticamente al instanciar una nueva clase en Python?",
        opts: ["__start__()", "__init__()", "__new__()", "constructor()"],
        ans: 1,
        exp: "El método __init__() actúa como el constructor inicializador de instancias en Python."
    },
    {
        id: 21,
        diff: "Fácil",
        cat: "Arquitectura & SPICE",
        q: "¿Qué evalúa principalmente la norma ISO/IEC 15504 (SPICE)?",
        opts: ["La velocidad de procesadores", "La capacidad y madurez de los procesos de software", "El costo del hardware", "La interfaz visual de una app"],
        ans: 1,
        exp: "SPICE evalúa y mejora la capacidad de los procesos del ciclo de vida del software."
    },
    {
        id: 22,
        diff: "Fácil",
        cat: "HTML",
        q: "¿Qué etiqueta se debe usar para crear una lista ordenada numéricamente?",
        opts: ["<ul>", "<ol>", "<li>", "<dl>"],
        ans: 1,
        exp: "<ol> crea una lista ordenada (Ordered List)."
    },
    {
        id: 23,
        diff: "Fácil",
        cat: "CSS",
        q: "¿Qué propiedad en CSS Flexbox define el eje principal de distribución de los elementos (filas o columnas)?",
        opts: ["flex-wrap", "flex-direction", "justify-content", "align-items"],
        ans: 1,
        exp: "flex-direction establece cómo se colocan los elementos flexibles en el contenedor (row, column, etc.)."
    },
    {
        id: 24,
        diff: "Fácil",
        cat: "JavaScript",
        q: "¿Qué método de array en JavaScript añade uno o más elementos al final de un arreglo?",
        opts: ["pop()", "shift()", "push()", "unshift()"],
        ans: 2,
        exp: "push() añade elementos al final del array y retorna la nueva longitud."
    },
    {
        id: 25,
        diff: "Fácil",
        cat: "Python",
        q: "¿Qué tipo de estructura de datos en Python es inmutable y se define entre paréntesis ()?",
        opts: ["Lista", "Diccionario", "Tupla", "Conjunto (Set)"],
        ans: 2,
        exp: "Las Tuplas son colecciones ordenadas e inmutables en Python."
    },

    // ================= INTERMEDIO (25 PREGUNTAS) =================
    {
        id: 26,
        diff: "Intermedio",
        cat: "JavaScript",
        q: "¿Cuál es el resultado de ejecutar `console.log(1 + '2' - 1)` en JavaScript?",
        opts: ["11", "12", "11", "NaN"],
        ans: 0,
        exp: "1 + '2' realiza una concatenación dando la cadena '12'. Luego '12' - 1 convierte la cadena a número restando 1, dando como resultado 11."
    },
    {
        id: 27,
        diff: "Intermedio",
        cat: "JavaScript",
        q: "¿Qué método de iteración de arrays crea un nuevo arreglo con los elementos que cumplen una condición lógica?",
        opts: ["map()", "forEach()", "filter()", "reduce()"],
        ans: 2,
        exp: "filter() crea un nuevo array con todos los elementos que pasan la prueba implementada por la función provista."
    },
    {
        id: 28,
        diff: "Intermedio",
        cat: "CSS",
        q: "En CSS Grid Layout, ¿cuál es la función de `grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))`?",
        opts: [
            "Crear exactamente 2 columnas fijas de 200px",
            "Generar un diseño responsive automático ajustando columnas según el espacio disponible",
            "Establecer filas adaptativas de 1fr",
            "Establecer la altura del contenedor grid"
        ],
        ans: 1,
        exp: "repeat con auto-fit y minmax crea cuadrículas fluidas y responsive sin necesidad de media queries manuales."
    },
    {
        id: 29,
        diff: "Intermedio",
        cat: "Python",
        q: "¿Qué hace una 'comprensión de listas' (List Comprehension) como `[x**2 for x in range(5) if x % 2 == 0]`?",
        opts: ["Genera la lista [0, 4, 16]", "Genera la lista [0, 1, 4, 9, 16]", "Produce un error de sintaxis", "Genera una lista de booleanos"],
        ans: 0,
        exp: "Para los números pares entre 0 y 4 (que son 0, 2, 4), eleva al cuadrado produciendo [0, 4, 16]."
    },
    {
        id: 30,
        diff: "Intermedio",
        cat: "Python",
        q: "¿Qué diferencia existe entre los operadores `==` e `is` en Python?",
        opts: [
            "No hay diferencia",
            "`==` compara valores; `is` compara identidad de memoria (si apuntan al mismo objeto)",
            "`is` es para números; `==` es para strings",
            "`==` compara referencias de memoria; `is` compara valores"
        ],
        ans: 1,
        exp: "== verifica la igualdad de contenido (valor), mientras que 'is' verifica la identidad (id en memoria)."
    },
    {
        id: 31,
        diff: "Intermedio",
        cat: "Git & GitHub",
        q: "¿Qué comando usas para traer las últimas actualizaciones de la rama remota e integrarlas (hacer merge) en tu rama local en un solo paso?",
        opts: ["git fetch", "git pull", "git sync", "git clone"],
        ans: 1,
        exp: "git pull ejecuta internamente un 'git fetch' seguido de un 'git merge'."
    },
    {
        id: 32,
        diff: "Intermedio",
        cat: "Git & GitHub",
        q: "¿Cómo se elimina o deshace el último commit pero conservando las modificaciones de tus archivos en el área de trabajo (working directory)?",
        opts: ["git reset --hard HEAD~1", "git reset --soft HEAD~1", "git revert HEAD", "git checkout HEAD~1"],
        ans: 1,
        exp: "git reset --soft deshace el commit manteniendo los cambios en staging/working directory."
    },
    {
        id: 33,
        diff: "Intermedio",
        cat: "POO",
        q: "¿Qué pilar de la POO se encarga de restringir el acceso directo a ciertos componentes u ocultar el estado interno de un objeto?",
        opts: ["Polimorfismo", "Herencia", "Encapsulamiento", "Abstracción"],
        ans: 2,
        exp: "El Encapsulamiento oculta el estado interno y expone métodos públicos (getters/setters) para interactuar de forma segura."
    },
    {
        id: 34,
        diff: "Intermedio",
        cat: "POO",
        q: "En JavaScript (ES6), ¿cómo hereda una clase derivada las propiedades y métodos de su clase padre?",
        opts: ["class Hijo implements Padre", "class Hijo extends Padre", "class Hijo inherits Padre", "class Hijo : Padre"],
        ans: 1,
        exp: "La palabra clave 'extends' se utiliza en las declaraciones de clase de ES6 para crear una subclase."
    },
    {
        id: 35,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué caracteriza al Nivel 2 (Gestionado) en el modelo de evaluación SPICE ISO/IEC 15504?",
        opts: [
            "El proceso se realiza de manera totalmente caótica e improvisada",
            "El proceso está planificado, supervisado, ajustado y sus productos de trabajo se gestionan",
            "La empresa utiliza control estadístico de procesos con métricas avanzadas",
            "Existe una constante innovación tecnológica automatizada"
        ],
        ans: 1,
        exp: "En el Nivel 2 (Managed), las ejecuciones del proceso se planifican, supervisan y sus artefactos se controlan."
    },
    {
        id: 36,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "¿Qué diferencia a la norma colombiana NTC 5420-3:2008 respecto al estándar SPICE ISO/IEC 15504?",
        opts: [
            "NTC 5420-3 evalúa procesos y SPICE mide productos",
            "NTC 5420-3 se centra en métricas internas de la calidad del producto de software, mientras SPICE evalúa la capacidad del proceso",
            "Ambas son idénticas y reemplazaron completamente a ISO 9001",
            "NTC 5420-3 es exclusiva para la arquitectura de hardware"
        ],
        ans: 1,
        exp: "NTC 5420-3 aborda métricas internas del producto (código, diseño), mientras SPICE mide procesos organizacionales."
    },
    {
        id: 37,
        diff: "Intermedio",
        cat: "JavaScript",
        q: "¿Qué es un 'Closure' (Clausura) en JavaScript?",
        opts: [
            "Un método para cerrar una ventana del navegador",
            "La combinación de una función agrupada con referencias a su estado primario (ámbito léxico)",
            "Un error fatal cuando el stack de llamadas colapsa",
            "Una sintaxis especial para declarar clases privadas"
        ],
        ans: 1,
        exp: "Un closure le da acceso al scope de una función exterior desde una función interior."
    },
    {
        id: 38,
        diff: "Intermedio",
        cat: "HTML",
        q: "¿Qué atributo en un elemento `<script>` hace que se ejecute de forma asíncrona mientras se procesa el HTML sin bloquear el renderizado?",
        opts: ["defer", "async", "preload", "lazy"],
        ans: 1,
        exp: "El atributo 'async' descarga el script en segundo plano y lo ejecuta tan pronto como esté listo sin pausar el parseo del HTML."
    },
    {
        id: 39,
        diff: "Intermedio",
        cat: "CSS",
        q: "¿Cuál es el orden de especificidad en CSS de MAYOR a MENOR?",
        opts: [
            "Estilos en línea > ID > Clase/Atributo/Pseudoclase > Elemento/Pseudoelemento",
            "ID > Estilos en línea > Clase > Elemento",
            "Elemento > Clase > ID > inline",
            "Clase > ID > inline > Elemento"
        ],
        ans: 0,
        exp: "La especificidad pondera: 1. Inline styles (1000), 2. IDs (100), 3. Clases/Atributos (10), 4. Elementos (1)."
    },
    {
        id: 40,
        diff: "Intermedio",
        cat: "Python",
        q: "¿Qué hace el decorador `@staticmethod` dentro de una clase en Python?",
        opts: [
            "Convierte un método en privado",
            "Permite definir un método que no recibe explícitamente ni la instancia (`self`) ni la clase (`cls`)",
            "Impide que la clase sea heredada",
            "Forza a que el método sea asíncrono"
        ],
        ans: 1,
        exp: "Un @staticmethod no recibe un primer argumento implícito (ni self ni cls); funciona como una función regular aislada."
    },
    {
        id: 41,
        diff: "Intermedio",
        cat: "Git & GitHub",
        q: "¿Para qué sirve el archivo `.gitignore`?",
        opts: [
            "Para listar los autores ignorados del repositorio",
            "Para indicar qué archivos o carpetas intencionalmente no deben rastrearse por Git",
            "Para bloquear descargas desde GitHub",
            "Para borrar commits antiguos"
        ],
        ans: 1,
        exp: ".gitignore le indica a Git qué archivos intencionalmente no rastreados deben ignorarse (ej: node_modules, .env)."
    },
    {
        id: 42,
        diff: "Intermedio",
        cat: "POO",
        q: "¿Qué permite el Polimorfismo en la POO?",
        opts: [
            "Ocultar los archivos fuente del proyecto",
            "Permite que objetos de distintas clases respondan al mismo mensaje o método según su propia implementación",
            "Convertir objetos JSON a XML automáticamente",
            "Hacer que un programa se ejecute en múltiples procesadores"
        ],
        ans: 1,
        exp: "El Polimorfismo permite enviar el mismo mensaje a distintos tipos de objetos y que cada uno actúe a su manera."
    },
    {
        id: 43,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "En el estándar SPICE, ¿en qué consiste la escala de logro N-P-L-F para calificar atributos de proceso?",
        opts: [
            "Not, Possible, Likely, Final",
            "Not achieved (0-15%), Partially (15-50%), Largely (50-85%), Fully achieved (85-100%)",
            "New, Processed, Loaded, Finished",
            "Normal, Priority, Low, Fast"
        ],
        ans: 1,
        exp: "N-P-L-F es la escala de 4 categorías: No alcanzado, Parcialmente alcanzado, Largamente alcanzado y Totalmente alcanzado."
    },
    {
        id: 44,
        diff: "Intermedio",
        cat: "JavaScript",
        q: "¿Qué devuelve el método `Array.prototype.reduce()`?",
        opts: [
            "Siempre un nuevo Array filtrado",
            "Un único valor acumulado tras procesar cada elemento de la lista",
            "Un valor booleano",
            "El índice del elemento buscado"
        ],
        ans: 1,
        exp: "reduce() ejecuta una función reductora sobre cada elemento, devolviendo como resultado un único valor."
    },
    {
        id: 45,
        diff: "Intermedio",
        cat: "Python",
        q: "¿Qué hace la palabra clave `yield` dentro de una función en Python?",
        opts: [
            "Detiene inmediatamente la ejecución de todo el programa",
            "Transforma la función en un Generador, devolviendo un valor de forma perezosa (lazy evaluation)",
            "Lanza una excepción personalizada",
            "Exporta una variable a nivel global"
        ],
        ans: 1,
        exp: "yield suspende la ejecución de la función guardando el estado para reanudarla en la siguiente iteración."
    },
    {
        id: 46,
        diff: "Intermedio",
        cat: "CSS",
        q: "¿Qué valor de la propiedad `position` en CSS posiciona un elemento relativo a la ventana del navegador (viewport) independientemente del scroll?",
        opts: ["relative", "absolute", "fixed", "sticky"],
        ans: 2,
        exp: "position: fixed saca al elemento del flujo estándar y lo ancla en relación con la ventana de visualización (viewport)."
    },
    {
        id: 47,
        diff: "Intermedio",
        cat: "Git & GitHub",
        q: "¿Qué es una 'Pull Request' (PR) en GitHub?",
        opts: [
            "Un comando para descargar cambios desde la terminal",
            "Una propuesta para integrar cambios de una rama a otra, permitiendo revisión de código e inspección de pruebas",
            "Un error al intentar subir código sin permisos",
            "Una solicitud para borrar un repositorio remoto"
        ],
        ans: 1,
        exp: "Una Pull Request les informa a otros colaboradores sobre los cambios enviados a una rama en GitHub para su revisión."
    },
    {
        id: 48,
        diff: "Intermedio",
        cat: "POO",
        q: "¿Cuál es el propósito del operador `super()` en subclases de clases orientadas a objetos?",
        opts: [
            "Hacer que el objeto sea público",
            "Llamar a métodos o al constructor de la clase padre o superclase",
            "Destruir la instancia actual de memoria",
            "Crear una supervariable global"
        ],
        ans: 1,
        exp: "super() otorga acceso a los métodos de la clase sobreescrita o al constructor padre."
    },
    {
        id: 49,
        diff: "Intermedio",
        cat: "Arquitectura & SPICE",
        q: "En SPICE ISO/IEC 15504, ¿qué caracteriza a la 'Dimensión de Proceso' frente a la 'Dimensión de Capacidad'?",
        opts: [
            "La dimensión de proceso contiene las métricas en código",
            "La dimensión de proceso define 'Qué se evalúa' (los objetivos del proceso) y la de capacidad define 'Qué tan bien se realiza'",
            "Ambas dimensiones miden únicamente la velocidad del servidor",
            "La dimensión de proceso evalúa el costo económico"
        ],
        ans: 1,
        exp: "Es la arquitectura bidimensional de SPICE: Proceso (qué se hace) y Capacidad (el grado de madurez)."
    },
    {
        id: 50,
        diff: "Intermedio",
        cat: "HTML",
        q: "¿Qué elemento semántico de HTML5 debe utilizarse para contenido independiente y autocontenido (como una entrada de blog o una noticia)?",
        opts: ["<section>", "<div>", "<article>", "<aside>"],
        ans: 2,
        exp: "<article> representa una composición autónoma en un documento que se puede distribuir de forma independiente."
    },

    // ================= AVANZADO (25 PREGUNTAS) =================
    {
        id: 51,
        diff: "Avanzado",
        cat: "JavaScript",
        q: "¿Cuál es el resultado de evaluar `Promise.all([Promise.resolve(1), Promise.reject('Error'), Promise.resolve(3)])`?",
        opts: [
            "Una promesa resuelta con [1, undefined, 3]",
            "Una promesa rechazada inmediatamente con la razón 'Error'",
            "Un arreglo conteniendo el error",
            "Reintenta las promesas automáticamente"
        ],
        ans: 1,
        exp: "Promise.all implementa fallo rápido (fail-fast): si cualquiera de las promesas se rechaza, la promesa resultante se rechaza inmediatamente."
    },
    {
        id: 52,
        diff: "Avanzado",
        cat: "JavaScript",
        q: "¿Qué mecanismo de JS permite que las variables declaradas con `var` o declaraciones de función sean movidas a la parte superior de su ámbito durante la fase de compilación?",
        opts: ["Event Loop", "Hoisting", "Clousure", "Currying"],
        ans: 1,
        exp: "Hoisting (elevación) es el comportamiento predeterminado de mover las declaraciones al principio de su ámbito."
    },
    {
        id: 53,
        diff: "Avanzado",
        cat: "CSS",
        q: "¿Qué hace la propiedad CSS `contain: layout style paint`?",
        opts: [
            "Aplica un marco de color al elemento",
            "Aísla el elemento y su subárbol del resto del DOM para optimizar significativamente el renderizado",
            "Elimina las animaciones CSS",
            "Renderiza el elemento mediante WebGL"
        ],
        ans: 1,
        exp: "La propiedad 'contain' permite a los desarrolladores aislar partes de una página, indicando al navegador que no redibuje el resto del DOM."
    },
    {
        id: 54,
        diff: "Avanzado",
        cat: "Python",
        q: "En Python, ¿qué es un Administrador de Contexto (Context Manager) y qué métodos dunder requiere una clase para implementarlo?",
        opts: [
            "Una clase con métodos __init__ y __del__",
            "Un objeto que gestiona recursos (como archivos) e implementa los métodos __enter__() y __exit__()",
            "Un módulo para manejar hilos",
            "Una función que envuelve un try/except"
        ],
        ans: 1,
        exp: "Los context managers (usados con la instrucción 'with') garantizan la liberación de recursos mediante __enter__ y __exit__."
    },
    {
        id: 55,
        diff: "Avanzado",
        cat: "Python",
        q: "¿Qué resuelve el concepto de GIL (Global Interpreter Lock) en la implementación CPython?",
        opts: [
            "Evita que se filtren contraseñas",
            "Garantiza que solo un hilo ejecute bytecode de Python a la vez para proteger la gestión de memoria no thread-safe",
            "Acelera el cálculo con GPU",
            "Bloquea la edición de archivos .pyc"
        ],
        ans: 1,
        exp: "GIL es un cerrojo en CPython que sincroniza la ejecución de hilos impidiendo multithreading en paralelo real sobre CPU."
    },
    {
        id: 56,
        diff: "Avanzado",
        cat: "Git & GitHub",
        q: "¿Cuál es la diferencia principal entre `git merge` y `git rebase`?",
        opts: [
            "Merge borra ramas y Rebase crea ramas",
            "Merge crea un commit de unión preservando el historial; Rebase reescribe el historial aplicando las confirmaciones sobre la rama destino linealmente",
            "Rebase no se puede usar con GitHub",
            "Son totalmente equivalentes"
        ],
        ans: 1,
        exp: "Git Rebase reescribe la historia del proyecto aplicando tus cambios sobre otra rama de forma lineal."
    },
    {
        id: 57,
        diff: "Avanzado",
        cat: "Git & GitHub",
        q: "¿Qué comando de Git se utiliza para extraer una confirmación (commit) específica de otra rama y aplicarla en la rama activa actual?",
        opts: ["git cherry-pick <hash>", "git extract <hash>", "git pull-commit <hash>", "git apply-patch"],
        ans: 0,
        exp: "git cherry-pick toma los cambios introducidos en un commit de Git existente y los aplica como un nuevo commit en la rama actual."
    },
    {
        id: 58,
        diff: "Avanzado",
        cat: "POO",
        q: "En el principio SOLID, ¿qué establece el Principio de Sustitución de Liskov (LSP)?",
        opts: [
            "Las clases deben ser abiertas para extensión pero cerradas para modificación",
            "Los objetos de una subclase deben poder reemplazar a los de la superclase sin alterar la corrección del programa",
            "Una clase debe tener una y solo una razón para cambiar",
            "Las interfaces deben ser lo más pequeñas posibles"
        ],
        ans: 1,
        exp: "LSP indica que cualquier subclase debe poder usarse en lugar de su superclase sin que falle la aplicación."
    },
    {
        id: 59,
        diff: "Avanzado",
        cat: "POO",
        q: "¿Qué caracteriza al patrón de diseño Factory Method?",
        opts: [
            "Asegura que exista una única instancia de una clase",
            "Define una interfaz para crear un objeto, pero deja que las subclases decidan qué clase instanciar",
            "Permite añadir responsabilidades dinámicamente a un objeto",
            "Conecta la base de datos de manera síncrona"
        ],
        ans: 1,
        exp: "Factory Method delega la lógica de instanciación de objetos a las subclases o métodos de fábrica."
    },
    {
        id: 60,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿Qué nivel de capacidad SPICE (ISO 15504) se requiere para que un proceso sea cuantificable y controlado estadísticamente?",
        opts: ["Nivel 2 (Gestionado)", "Nivel 3 (Establecido)", "Nivel 4 (Predecible)", "Nivel 5 (Optimizado)"],
        ans: 2,
        exp: "El Nivel 4 (Predictable) opera dentro de límites cuantitativos mediante recolección sistemática de métricas."
    },
    {
        id: 61,
        diff: "Avanzado",
        cat: "JavaScript",
        q: "En el Event Loop de JavaScript, ¿cuál es la diferencia de prioridad entre las Microtareas (Microtasks) y las Macrotareas (Macrotasks/Tasks)?",
        opts: [
            "Las Macrotareas se ejecutan siempre primero",
            "Las Microtareas (promesas, queueMicrotask) se procesan completando la cola antes de dar paso a la siguiente Macrotarea (setTimeout, I/O)",
            "Ambas colas se ejecutan simultáneamente en hilos separados",
            "Las Microtareas solo funcionan en Node.js"
        ],
        ans: 1,
        exp: "La cola de microtareas se vacía por completo inmediatamente después de la tarea actual y antes de pasar a la siguiente macrotarea."
    },
    {
        id: 62,
        diff: "Avanzado",
        cat: "JavaScript",
        q: "¿Qué patrón de diseño o característica implementa la API `Proxy` en JavaScript?",
        opts: [
            "Permite envolver un objeto para interceptar y personalizar operaciones fundamentales como lectura, escritura y definición de propiedades",
            "Conecta JavaScript directamente con un servidor proxy de red",
            "Crea una copia profunda de un objeto inmutable",
            "Compila JS a código nativo WebAssembly"
        ],
        ans: 0,
        exp: "El objeto Proxy permite crear un intermediario para otro objeto, pudiendo interceptar trampas como get, set, apply, etc."
    },
    {
        id: 63,
        diff: "Avanzado",
        cat: "Python",
        q: "¿Qué hace la metaclase (`metaclass`) en Python?",
        opts: [
            "Es una clase que hereda de dict",
            "Es la 'clase de una clase'; define cómo se comportan y construyen las clases del programa",
            "Es un módulo para compilar código Python a C",
            "Un decorador para ocultar código"
        ],
        ans: 1,
        exp: "Una metaclase es la encargada de definir cómo se construye una clase (del mismo modo que una clase define la construcción de un objeto)."
    },
    {
        id: 64,
        diff: "Avanzado",
        cat: "Python",
        q: "¿Qué diferencia existe en Python entre `__str__` y `__repr__`?",
        opts: [
            "No hay diferencia",
            "`__str__` busca una representación legible para el usuario; `__repr__` busca una representación inequívoca para desarrolladores/debugging",
            "`__repr__` convierte a JSON",
            "`__str__` es para números; `__repr__` para textos"
        ],
        ans: 1,
        exp: "__str__ es para el cliente final y __repr__ para desarrolladores (idealmente debe ser código Python válido para recrear el objeto)."
    },
    {
        id: 65,
        diff: "Avanzado",
        cat: "Git & GitHub",
        q: "¿Para qué sirve la funcionalidad `git reflog`?",
        opts: [
            "Para eliminar logs del sistema operativo",
            "Registra cada cambio del puntero HEAD, permitiendo recuperar commits o ramas eliminadas accidentalmente",
            "Sincroniza repositorios remotos sin conexión a internet",
            "Formatea el código antes de hacer commit"
        ],
        ans: 1,
        exp: "git reflog guarda el historial de hacia dónde apuntaron los punteros localmente, permitiendo rescatar cambios 'perdidos'."
    },
    {
        id: 66,
        diff: "Avanzado",
        cat: "POO",
        q: "En los principios SOLID, ¿cuál es la 'D' (Principio de Inversión de Dependencias)?",
        opts: [
            "Los módulos de alto nivel no deben depender de los de bajo nivel; ambos deben depender de abstracciones",
            "Las bases de datos deben ser independientes de la red",
            "No se deben usar dependencias de librerías externas",
            "Los objetos deben ser destruidos de inmediato"
        ],
        ans: 0,
        exp: "DIP dicta que debemos depender de abstracciones (interfaces) y no de implementaciones concretas."
    },
    {
        id: 67,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "¿En qué consiste el Nivel 5 (En optimización) de SPICE ISO/IEC 15504?",
        opts: [
            "En contratar más programadores juniors",
            "En la mejora continua cuantitativa y sistemática orientada a cumplir los objetivos de negocio futuros de la organización",
            "En automatizar el 100% del código con inteligencia artificial",
            "En migrar todos los servidores a la nube"
        ],
        ans: 1,
        exp: "El Nivel 5 (Optimizing) analiza datos del desempeño para realizar innovaciones y mejoras continuas identificables."
    },
    {
        id: 68,
        diff: "Avanzado",
        cat: "CSS",
        q: "¿Qué es el 'BFC' (Block Formatting Context) en CSS y cuál es uno de sus usos clave?",
        opts: [
            "Un tipo de fuente tipográfica",
            "Una región del renderizado que aísla el diseño de sus elementos hijo; sirve para contener elementos flotantes (clearfix) o evitar colapso de márgenes",
            "Un marco para crear animaciones 3D",
            "Una etiqueta HTML descontinuada"
        ],
        ans: 1,
        exp: "El BFC es parte del renderizado visual de una página web; evita la superposición de márgenes y contiene elementos con float."
    },
    {
        id: 69,
        diff: "Avanzado",
        cat: "HTML",
        q: "¿Para qué sirve el elemento HTML5 `<picture>`?",
        opts: [
            "Para editar fotografías directamente en el navegador",
            "Para proporcionar múltiples fuentes de imagen (`<source>`) y permitir diseño de imágenes adaptativas según resolución o tipo de imagen",
            "Para renderizar gráficos vectoriales SVG exclusivamente",
            "Es un sinónimo idéntico a <img>"
        ],
        ans: 1,
        exp: "<picture> contiene uno o más elementos <source> y un <img> para ofrecer versiones óptimas de la imagen según media queries o formatos (WebP, AVIF)."
    },
    {
        id: 70,
        diff: "Avanzado",
        cat: "JavaScript",
        q: "¿Qué distingue a las estructuras `WeakMap` y `WeakSet` en JavaScript?",
        opts: [
            "Son versiones más lentas de Map y Set",
            "Mantienen referencias 'débiles' a objetos, permitiendo que el Garbage Collector libere la memoria si no hay otras referencias activas",
            "Solo aceptan números y cadenas",
            "Pueden ser convertidas a JSON con JSON.stringify"
        ],
        ans: 1,
        exp: "Las claves en un WeakMap deben ser objetos y sus referencias son débiles, evitando fugas de memoria (memory leaks)."
    },
    {
        id: 71,
        diff: "Avanzado",
        cat: "Python",
        q: "¿Qué utilidad tiene el módulo `asyncio` y la sintaxis `async / await` en Python?",
        opts: [
            "Permite multithreading en múltiples núcleos utilizando GIL",
            "Facilita la programación concurrente monohilo utilizando un bucle de eventos (event loop) para operaciones I/O no bloqueantes",
            "Sirve únicamente para enviar correos electrónicos",
            "Aumenta la velocidad de los bucles `for`"
        ],
        ans: 1,
        exp: "asyncio escribe código concurrente utilizando la sintaxis async/await ideal para programas con cuello de botella en entrada/salida (I/O)."
    },
    {
        id: 72,
        diff: "Avanzado",
        cat: "Git & GitHub",
        q: "¿Qué comando te ayuda a encontrar el commit exacto que introdujo un error utilizando una búsqueda binaria en el historial?",
        opts: ["git bisect", "git search-bug", "git log --find", "git blame"],
        ans: 0,
        exp: "git bisect utiliza búsqueda binaria para encontrar rápidamente qué commit introdujo un bug o regresión."
    },
    {
        id: 73,
        diff: "Avanzado",
        cat: "POO",
        q: "¿En qué consiste el patrón de diseño Observer?",
        opts: [
            "Supervisa el uso de CPU de la aplicación",
            "Define una dependencia 1 a N entre objetos, de modo que cuando un objeto cambia de estado, todos sus dependientes son notificados automáticamente",
            "Crea una copia oculta de las clases",
            "Permite ejecutar código JS desde Python"
        ],
        ans: 1,
        exp: "El patrón Observer establece un mecanismo de suscripción para notificar eventos a múltiples objetos observadores."
    },
    {
        id: 74,
        diff: "Avanzado",
        cat: "Arquitectura & SPICE",
        q: "En el modelo SPICE ISO/IEC 15504, ¿cuál es el atributo de proceso `PA 3.1`?",
        opts: [
            "Desempeño del proceso",
            "Definición del proceso",
            "Gestión de productos de trabajo",
            "Optimización del proceso"
        ],
        ans: 1,
        exp: "El Atributo de Proceso 3.1 (PA 3.1) corresponde a la Definición del Proceso Estándar de la organización."
    },
    {
        id: 75,
        diff: "Avanzado",
        cat: "CSS",
        q: "¿Qué ventaja ofrece la pseudo-clase CSS `:is()` frente a los selectores tradicionales agrupados por comas?",
        opts: [
            "Hace que el código se ejecute más rápido",
            "Permite escribir listas de selectores de forma compacta y toma la especificidad del selector más específico del grupo ignorando selectores inválidos",
            "Reemplaza totalmente a JavaScript",
            "Aplica estilos solo en móviles"
        ],
        ans: 1,
        exp: ":is() simplifica listas largas de selectores y su especificidad se determina por el argumento más específico."
    },

    // ================= EXPERTO / SENIOR (25 PREGUNTAS) =================
    {
        id: 76,
        diff: "Experto/Senior",
        cat: "JavaScript",
        q: "En los motores modernos de JS (como V8), ¿qué son las clases ocultas (Hidden Classes / Shapes) y las comprobaciones en línea (Inline Caches - IC)?",
        opts: [
            "Mecanismos de seguridad contra ataques XSS",
            "Optimizaciones del compilador JIT para acelerar el acceso a propiedades de objetos basándose en su estructura interna en memoria",
            "Funciones avanzadas para renderizar HTML rápido",
            "Librerías externas para Node.js"
        ],
        ans: 1,
        exp: "V8 crea Hidden Classes dinámicamente para rastrear la forma de los objetos y usa Inline Caches para evitar búsquedas repetitivas de propiedades."
    },
    {
        id: 77,
        diff: "Experto/Senior",
        cat: "JavaScript",
        q: "¿Cómo funciona la API de `SharedArrayBuffer` y `Atomics` en JavaScript para entornos multihilo con Web Workers?",
        opts: [
            "Comparten memoria mediante peticiones HTTP",
            "SharedArrayBuffer comparte un buffer de bytes en memoria compartida y Atomics provee operaciones atómicas thread-safe sin condiciones de carrera",
            "No es posible compartir memoria en JavaScript",
            "Es un plugin obsoleto de Flash"
        ],
        ans: 1,
        exp: "Atomics proporciona operaciones estáticas para garantizar la sincronización segura de memoria compartida entre el hilo principal y Web Workers."
    },
    {
        id: 78,
        diff: "Experto/Senior",
        cat: "Python",
        q: "¿Cómo interactúa el Garbage Collector de Python con el conteo de referencias y la recolección de ciclos de referencias circulares?",
        opts: [
            "Python solo usa recolección manual",
            "Utiliza principalmente conteo de referencias para liberación inmediata y un recolector generacional (GC) para detectar y romper ciclos de referencias inaccesibles",
            "El GIL elimina automáticamente las referencias cruzadas",
            "Python no requiere liberación de memoria"
        ],
        ans: 1,
        exp: "CPython destruye objetos cuando su conteo de referencias llega a 0; adicionalmente, un algoritmo generacional busca ciclos donde dos objetos se referencian entre sí."
    },
    {
        id: 79,
        diff: "Experto/Senior",
        cat: "Python",
        q: "En arquitectura de software con Python, ¿qué ventaja ofrece el uso del módulo `dataclasses` con `slots=True`?",
        opts: [
            "Permite cifrar la clase en el disco",
            "Reduce dramáticamente la huella de memoria y acelera el acceso a atributos al evitar la creación del diccionario implícito `__dict__` por instancia",
            "Permite ejecutar código en C++",
            "Convierte la clase en una API REST"
        ],
        ans: 1,
        exp: "__slots__ asigna un espacio fijo de memoria para atributos previniendo la sobrecarga de un __dict__ por cada objeto."
    },
    {
        id: 80,
        diff: "Experto/Senior",
        cat: "Git & GitHub",
        q: "¿Cómo se implementa una estrategia de integración continua basada en 'Trunk-Based Development' frente a 'GitFlow'?",
        opts: [
            "Trunk-Based ignora la rama main y usa solo develop",
            "Trunk-Based hace commits frecuentes en una única rama principal (main) con ramas de vida corta, evitando fusiones gigantescas de GitFlow",
            "GitFlow no utiliza ramas de feature",
            "Ambas exigen al menos 50 ramas paralelas"
        ],
        ans: 1,
        exp: "Trunk-Based Development fomenta integraciones continuas pequeñas y frecuentes sobre el tronco principal frente a ramas duraderas como en GitFlow."
    },
    {
        id: 81,
        diff: "Experto/Senior",
        cat: "POO",
        q: "En diseño orientado a objetos avanzado, ¿qué es el anti-patrón 'God Object' (Objeto Dios)?",
        opts: [
            "Un objeto que nunca puede ser instanciado",
            "Una clase centralizada que sabe demasiado o hace demasiado, violando el Principio de Responsabilidad Única (SRP)",
            "Un patrón oficial de la banda de los cuatro (GoF)",
            "Un tipo de base de datos relacional"
        ],
        ans: 1,
        exp: "Un God Object o Blob es un anti-patrón donde una clase acumula la mayoría de datos y responsabilidades de la aplicación."
    },
    {
        id: 82,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "En una evaluación SPICE (ISO 15504), ¿cuál es la diferencia crítica entre el modelo de madurez CMMI (representación escalonada) y SPICE (representación continua)?",
        opts: [
            "CMMI evalúa procesos individualmente sin niveles de organización",
            "SPICE utiliza un enfoque continuo donde cada proceso individual evaluado recibe un nivel de capacidad independiente (Perfil de Capacidad)",
            "SPICE solo aplica para proyectos de hardware",
            "CMMI no requiere evidencias documentadas"
        ],
        ans: 1,
        exp: "La representación continua de SPICE permite evaluar cada proceso de manera independiente produciendo un Perfil de Capacidad claro."
    },
    {
        id: 83,
        diff: "Experto/Senior",
        cat: "CSS",
        q: "¿Qué resuelve el principio de diseño CSS conocido como 'ITCSS' (Inverted Triangle CSS)?",
        opts: [
            "Un plugin para centrar divs verticalmente",
            "Una arquitectura en capas para organizar hojas de estilo de mayor especificidad a menor especificidad evitando conflictos de cascada",
            "Una propiedad para crear triángulos gráficos con borde",
            "Un compilador de TypeScript a CSS"
        ],
        ans: 1,
        exp: "ITCSS organiza los archivos CSS en capas desde lo más genérico (resets) a lo más explícito (componentes/overrides) controlando la cascada."
    },
    {
        id: 84,
        diff: "Experto/Senior",
        cat: "JavaScript",
        q: "¿Qué es la 'ZTP' (Zero-Text-Node Policy) o virtualización del DOM en frameworks de renderizado?",
        opts: [
            "Una política para eliminar comentarios de texto en el código",
            "Técnicas avanzadas para mantener solo los nodos visibles en el viewport minimizando el consumo de memoria del DOM del navegador",
            "Eliminar todas las etiquetas <p> de la web",
            "Formatear strings antes de guardarlos en BD"
        ],
        ans: 1,
        exp: "La virtualización renderiza únicamente una subsección de datos grandes visible en la pantalla para mantener rendimiento a 60fps."
    },
    {
        id: 85,
        diff: "Experto/Senior",
        cat: "Python",
        q: "En programación orientada a objetos en Python, ¿cómo funciona el algoritmo MRO (Method Resolution Order) basado en C3 Linearization?",
        opts: [
            "Recorre las clases secundarias al azar",
            "Garantiza un orden determinista de búsqueda de métodos en herencia múltiple respetando la precedencia local y la monotonicidad",
            "Elimina métodos duplicados en tiempo de ejecución",
            "Solo funciona con clases abstractas"
        ],
        ans: 1,
        exp: "El algoritmo C3 Linearization resuelve el problema del diamante en herencia múltiple de Python calculando un orden MRO estricto."
    },
    {
        id: 86,
        diff: "Experto/Senior",
        cat: "Git & GitHub",
        q: "¿Para qué se utiliza el comando `git filter-repo` (o el histórico `git filter-branch`)?",
        opts: [
            "Para filtrar líneas de código duplicadas",
            "Para reescribir permanentemente el historial entero del repositorio (por ejemplo, para purgar datos sensibles como claves expuestas)",
            "Para generar un archivo ZIP comprimido",
            "Para hacer deploy automático en AWS"
        ],
        ans: 1,
        exp: "git filter-repo modifica el árbol de commits en todo el historial para eliminar secretos, archivos grandes o datos sensibles."
    },
    {
        id: 87,
        diff: "Experto/Senior",
        cat: "POO",
        q: "¿En qué consiste la técnica de 'Refactorización a Patrón Strategy' cuando se tienen múltiples estructuras condicionales complejas (`if/else` o `switch` anidados)?",
        opts: [
            "Reemplazar condicionales encadenadas por clases de algoritmos intercambiables encapsulados tras una interfaz común",
            "Borrar el código condicional y usar excepciones",
            "Mover todas las variables a una BD NoSQL",
            "Reescribir el programa en C++"
        ],
        ans: 0,
        exp: "El patrón Strategy encapsula los diferentes algoritmos en clases separadas permitiendo alternarlos limpiamente sin condicionales gigantes."
    },
    {
        id: 88,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué implica la norma de métricas internas NTC 5420-3 (ISO/IEC 9126-3) en la etapa de diseño de arquitectura de software?",
        opts: [
            "Define los precios de venta del software en Colombia",
            "Permite evaluar cuantitativamente la complejidad, mantenibilidad y modularidad de artefactos antes de la compilación o despliegue final",
            "Garantiza que el servidor no consuma energía",
            "Sustituye completamente los métodos de prueba unitaria"
        ],
        ans: 1,
        exp: "Las métricas internas miden propiedades estáticas de artefactos intermediate (diseños, especificaciones) para anticipar problemas de calidad."
    },
    {
        id: 89,
        diff: "Experto/Senior",
        cat: "HTML",
        q: "¿Qué son los 'Web Components' y cuáles son sus tres estándares fundamentales en la plataforma Web nativa?",
        opts: [
            "React, Angular y Vue",
            "Custom Elements, Shadow DOM y HTML Templates",
            "HTTP/2, HTTPS y WebSockets",
            "Node.js, Express y MongoDB"
        ],
        ans: 1,
        exp: "Los Web Components nativos se basan en Custom Elements, Shadow DOM (aislamiento de DOM/CSS) y <template>."
    },
    {
        id: 90,
        diff: "Experto/Senior",
        cat: "CSS",
        q: "¿Qué hace la función CSS `clamp(MIN, VAL, MAX)` y cómo optimiza la tipografía fluida?",
        opts: [
            "Comprime imágenes CSS",
            "Calcula un valor dinámico entre una escala mínima y máxima preferida sin requerir múltiples media queries",
            "Corta el texto sobrante con puntos suspensivos",
            "Desactiva las animaciones en pantallas táctiles"
        ],
        ans: 1,
        exp: "clamp() permite elegir un valor intermedio de una escala que se escala dinámicamente según la pantalla entre límites estritos."
    },
    {
        id: 91,
        diff: "Experto/Senior",
        cat: "JavaScript",
        q: "¿Qué es el fenómeno de 'Memory Leak' por variables globales no intencionadas o Closures desprendidos en JS y cómo identificarlo?",
        opts: [
            "Un error de sintaxis que detiene el compilador",
            "La retención indeseada de espacio en el Heap de memoria por objetos que ya no se usan; se diagnostica mediante Heap Snapshots en DevTools",
            "Un ataque informático que satura la memoria del cliente",
            "Cuando se borra una variable const"
        ],
        ans: 1,
        exp: "Los memory leaks ocurren cuando objetos inalcanzables siguen siendo referenciados en el árbol del Garbage Collector."
    },
    {
        id: 92,
        diff: "Experto/Senior",
        cat: "Python",
        q: "¿En qué consiste el principio de 'Duck Typing' en Python?",
        opts: [
            "Es un módulo para procesar sonido de aves",
            "'Si camina como un pato y suena como un pato, es un pato'; el tipo de un objeto se determina por sus métodos/atributos y no por su clase de herencia explícita",
            "Un decorador para convertir funciones a clases",
            "Una prueba unitaria que valida errores de sintaxis"
        ],
        ans: 1,
        exp: "Duck Typing evalúa los objetos por su comportamiento (qué métodos soportan) en lugar de verificar su tipo estático o herencia."
    },
    {
        id: 93,
        diff: "Experto/Senior",
        cat: "Git & GitHub",
        q: "¿Qué ventaja ofrece `git worktree` sobre hacer clones múltiples del mismo repositorio?",
        opts: [
            "Permite trabajar en múltiples ramas simultáneamente en diferentes directorios vinculados a una misma copia de repositorio .git",
            "Elimina el requisito de instalar Git",
            "Aumenta la velocidad del internet",
            "Convierte repositorios privados en públicos"
        ],
        ans: 0,
        exp: "git worktree permite tener varios árboles de trabajo vinculados al mismo repositorio local sin necesidad de clonar múltiples veces."
    },
    {
        id: 94,
        diff: "Experto/Senior",
        cat: "POO",
        q: "¿Qué establece el Principio de Segregación de Interfaces (ISP) de SOLID?",
        opts: [
            "Ningún cliente debe ser forzado a depender de métodos o interfaces que no utiliza",
            "Todas las interfaces deben colocarse en un solo archivo",
            "Las interfaces deben cambiarse diariamente",
            "Solo se permite una interfaz por proyecto"
        ],
        ans: 0,
        exp: "ISP aboga por interfaces pequeñas y específicas en lugar de interfaces masivas e incoherentes."
    },
    {
        id: 95,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Cuál es el propósito del proceso 'SUP.8' en el modelo de referencia ISO/IEC 15504 (SPICE)?",
        opts: [
            "Venta de licencias comercializables",
            "Gestión de la Configuración del Software (garantizar la integridad de los productos de trabajo y su trazabilidad)",
            "Pruebas de estrés en servidores cloud",
            "Diseño de interfaces gráficas UX/UI"
        ],
        ans: 1,
        exp: "El proceso SUP.8 (Software Configuration Management) asegura la trazabilidad, control de versiones y almacenamiento de artefactos."
    },
    {
        id: 96,
        diff: "Experto/Senior",
        cat: "JavaScript",
        q: "¿Qué es el patrón 'Currying' en programación funcional con JS?",
        opts: [
            "Transformar una función que toma múltiples argumentos en una secuencia de funciones que toman un solo argumento cada una",
            "Un método para formatear fechas a texto local",
            "Una técnica para ejecutar código asíncrono",
            "Una extensión de VS Code"
        ],
        ans: 0,
        exp: "Currying evalúa f(a,b,c) como f(a)(b)(c) permitiendo la aplicación parcial de argumentos."
    },
    {
        id: 97,
        diff: "Experto/Senior",
        cat: "Python",
        q: "¿Qué hace la función `sys.setrecursionlimit()` en Python y qué riesgo conlleva incrementarla de manera desmedida?",
        opts: [
            "Aumenta la RAM de la tarjeta de vídeo",
            "Aumenta el límite del Call Stack de recursión; si se incrementa demasiado puede provocar un Stack Overflow que crashie el intérprete de CPython sin captura de excepción",
            "Incrementa el número de hilos de CPU disponibles",
            "Optimiza el Garbage Collector"
        ],
        ans: 1,
        exp: "Modificar el límite de recursión por encima de la capacidad de la pila de C resulta en violaciones de segmento de bajo nivel."
    },
    {
        id: 98,
        diff: "Experto/Senior",
        cat: "CSS",
        q: "¿Qué es la especificación 'CSS Container Queries' (`@container`) y cómo revoluciona el diseño responsivo frente a las Media Queries convencionales?",
        opts: [
            "Permite aplicar estilos al navegador completo",
            "Permite aplicar estilos a un elemento según el tamaño de su contenedor padre inmediato y no únicamente según la pantalla del viewport",
            "Una herramienta para compilar archivos Docker con CSS",
            "Una función para importar iconos SVG"
        ],
        ans: 1,
        exp: "Container Queries permite crear componentes verdaderamente modulares respondiendo al ancho de su contenedor directo."
    },
    {
        id: 99,
        diff: "Experto/Senior",
        cat: "POO",
        q: "En patrones de arquitectura de software, ¿cuál es la responsabilidad de un 'Repository Pattern'?",
        opts: [
            "Mediador entre la capa de dominio y el mapeo de datos / almacenamiento persistente, simulando una colección en memoria",
            "Almacenar el código fuente en GitHub",
            "Servir archivos estáticos HTML",
            "Controlar las cookies del navegador"
        ],
        ans: 0,
        exp: "El patrón Repository encapsula la lógica para acceder a las fuentes de datos aislando la capa de negocio de detalles de infraestructura."
    },
    {
        id: 100,
        diff: "Experto/Senior",
        cat: "Arquitectura & SPICE",
        q: "¿Qué objetivo persigue la integración de métricas NTC 5420-3 y evaluaciones SPICE en un ciclo de vida SPI (Software Process Improvement)?",
        opts: [
            "Reducir los sueldos del equipo de desarrollo",
            "Establecer una línea base cuantitativa tanto del Proceso (capacidad operacional) como del Producto (calidad interna) para decisiones basadas en evidencias",
            "Sustituir a los desarrolladores por evaluadores externos",
            "Eliminar la necesidad de realizar pruebas unitarias"
        ],
        ans: 1,
        exp: "Combinar SPICE (procesos) y NTC 5420-3 (métricas internas de producto) brinda un marco completo de mejora basada en evidencias sólidas."
    }
];
