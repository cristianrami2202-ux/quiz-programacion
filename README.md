# DevMaster 100 - Plataforma de Evaluación y Práctica de Programación

Este proyecto contiene una plataforma interactiva completa con **100 preguntas avanzadas y explicadas** clasificadas por niveles de dificultad (Fácil, Intermedio, Avanzado, Experto) sobre JavaScript, HTML, CSS, Python, Git/GitHub, POO y Arquitectura de Software / SPICE ISO 15504 & NTC 5420-3.

---

## 🚀 Pasos para abrir en Visual Studio Code

1. Descarga el archivo `quiz_programacion_github.zip`.
2. Extrae el contenido en cualquier carpeta de tu computadora.
3. Abre **Visual Studio Code**.
4. Ve a `Archivo > Abrir carpeta...` (o `File > Open Folder...`) y selecciona la carpeta descomprimida.
5. Puedes abrir `index.html` con la extensión **Live Server** o haciendo doble clic sobre `index.html` para verlo en tu navegador.

---

## 🐙 Pasos para subir y desplegar en GitHub Pages GRATIS

### Paso 1: Inicializar Git localmente en VS Code
Abre la terminal integrada en VS Code (`Ctrl + ~` o `Cmd + ~`) y ejecuta:

```bash
git init
git add .
git commit -m "Initial commit: Plataforma DevMaster 100"
```

### Paso 2: Crear el repositorio en GitHub
1. Ve a [GitHub.com](https://github.com) e inicia sesión.
2. Haz clic en el botón **New** (Nuevo Repositorio).
3. Ponle un nombre al repositorio (por ejemplo: `devmaster-100` o `quiz-programacion`).
4. Déjalo en modo **Public**.
5. No selecciones ni README ni .gitignore (ya los tenemos creados). Haz clic en **Create repository**.

### Paso 3: Conectar tu código local con GitHub
Copia las instrucciones que te da GitHub y ejecútalas en tu terminal de VS Code:

```bash
git branch -M main
git remote add origin https://github.com/TU-USUARIO/TU-REPOSITO.git
git push -u origin main
```

*(Reemplaza `TU-USUARIO` y `TU-REPOSITO` por los tuyos).*

---

### Paso 4: Desplegar en GitHub Pages
1. Dentro de tu repositorio en GitHub, ve a la pestaña **Settings** (Configuración).
2. En el menú lateral izquierdo, selecciona **Pages**.
3. En la sección **Build and deployment > Branch**:
   - Selecciona la rama `main`.
   - Selecciona la carpeta `/ (root)`.
4. Haz clic en **Save**.

¡Listo! En un par de minutos, GitHub te dará un enlace público como este:
`https://TU-USUARIO.github.io/TU-REPOSITO/`

---

## 💻 Estructura del Proyecto

```text
├── index.html        # Estructura principal y layouts (Tailwind CSS)
├── js/
│   ├── questions.js  # Base de datos completa de las 100 preguntas
│   └── app.js        # Lógica de práctica, filtros y modo examen
└── README.md         # Documentación del proyecto
```
