
# Sitio Web IPN Cuauhtémoc

Bienvenido al repositorio del sitio web de IPN Cuauhtémoc. Nuestro equipo está enfocado en CanSat y otras competencias relacionadas con la industria aeroespacial. Este sitio está construido usando React, Bootstrap y Vite.

## Tabla de Contenidos

- [Sitio Web IPN Cuauhtémoc](#sitio-web-ipn-cuauhtémoc)
  - [Tabla de Contenidos](#tabla-de-contenidos)
  - [Resumen del Proyecto](#resumen-del-proyecto)
  - [Tecnologías Utilizadas](#tecnologías-utilizadas)
  - [Comenzando](#comenzando)
    - [Prerrequisitos](#prerrequisitos)
    - [Instalación](#instalación)
    - [Ejecutando el Servidor de Desarrollo](#ejecutando-el-servidor-de-desarrollo)
  - [Estructura de Carpetas](#estructura-de-carpetas)
  - [Scripts Disponibles](#scripts-disponibles)
  - [Contenido de la Página Web](#contenido-de-la-página-web)

## Resumen del Proyecto

Este sitio web sirve como la presencia en línea del equipo IPN Cuauhtémoc, mostrando nuestros proyectos, miembros del equipo y logros en competencias aeroespaciales.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **Bootstrap**: Framework CSS para diseño responsivo.
- **Vite**: Herramienta rápida de desarrollo y construcción.
- **Alias**: Se ha definido un alias `@` para la carpeta `src` para simplificar las importaciones.

## Comenzando

### Prerrequisitos

Asegúrate de tener los siguientes programas instalados en tu máquina de desarrollo:

- **Node.js** (versión 14 o superior)
- **npm** (versión 6 o superior) o **yarn** (versión 1.22 o superior)

### Instalación

1. **Clona el repositorio**:
    ```sh
    git clone https://github.com/tu-usuario/ipn-cuauhtemoc-website.git
    cd ipn-cuauhtemoc-website
    ```

2. **Instala las dependencias**:
    ```sh
    npm install
    ```
    o
    ```sh
    yarn install
    ```

### Ejecutando el Servidor de Desarrollo

Inicia el servidor de desarrollo:
    ```sh
    npm run dev
    ```

El sitio estará disponible en http://localhost:5173.

## Estructura de Carpetas

Aquí tienes una vista general de la estructura de carpetas:

```plaintext
ipn-cuauhtemoc-website/
├── public/              # Archivos estáticos
├── src/
│   ├── assets/          # Imágenes, fuentes, etc.
│   ├── components/      # Componentes reutilizables
│   ├── content/         # Contenido de la página (ver explicación abajo)
│   ├── pages/           # Componentes de página
│   ├── routes/          # Archivo para el enrutamiento de la SPA
│   ├── App.jsx          # Componente raíz
│   └── main.jsx         # Punto de entrada de React
├── .gitignore
├── index.html           # Plantilla HTML
├── package.json
└── README.md
```

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar los siguientes comandos:

- `npm run dev` o `yarn dev`: Inicia el servidor de desarrollo.
- `npm run build` o `yarn build`: Construye la aplicación para producción.
- `npm run serve` o `yarn serve`: Sirve la aplicación construida (después de ejecutar `build`).

## Contenido de la Página Web

Dentro de la carpeta `src/content`, se encuentran los archivos JSON que contienen la información dinámica del sitio web. Aquí puedes cambiar la información de la página, que incluye:

- **Competencias**: Listado de competencias en las que participa el equipo.
- **Información de los Miembros del Equipo**: Perfiles de cada miembro, con su nombre, sección, foto y pequeña reseña.
- **Misión y Visión**: Descripción de la misión y visión del equipo.
- **Descripción de las Subsecciones del Equipo**: Información sobre diferentes secciones dentro del equipo.
- **Patrocinadores**: Detalles de los patrocinadores y sus contribuciones.

Para mostrar imágenes en la página, agrega el enlace de la imagen desde Google Drive. Asegúrate de que la imagen o la carpeta que contiene las imágenes esté configurada para "compartir con todos" con la opción de "ver" activada para que sean visibles en el sitio web.
