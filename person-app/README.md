# Template DELOSI

Este es un proyecto modelo front-end diseñado para servir como guía y punto de partida para otros proyectos front-end. Proporciona una estructura organizada, configuración inicial, estándares de codificación y ejemplos de buenas prácticas.

## Tecnologías Utilizadas

- [Next.js](https://nextjs.org/): Un marco de trabajo de React que facilita la creación de aplicaciones web modernas.
- [React](https://reactjs.org/): Una biblioteca JavaScript para construir interfaces de usuario.
- Redux Toolkit: Una herramienta oficial de Redux que simplifica la gestión del estado en aplicaciones React.
- [Sass](https://sass-lang.com/): Un preprocesador de CSS que facilita la creación y mantenimiento de estilos.
- [Jest](https://jestjs.io/): Un marco de pruebas de JavaScript ampliamente utilizado.
- Husky: Para la ejecución de scripts pre-commit y pre-push.
- [TypeScript](https://www.typescriptlang.org/): Un superconjunto de JavaScript que agrega tipos estáticos.

## Instalación y Configuración

Este proyecto utiliza [Node.js](https://nodejs.org/) en su versión 18.18.2. Asegúrate de tener Node.js instalado en tu sistema antes de comenzar.

### Paso 1: Clonar el Repositorio

Para comenzar, clona el repositorio de tu proyecto modelo desde la línea de comandos:

`git clone https://gitlab.com/delosi/project-templates/nextjs-web-template.git`

Luego, navega al directorio del proyecto:

`cd nextjs-web-template`

### Paso 2: Instalación de Dependencias

Para instalar las dependencias del proyecto, utilizaremos dos comandos: `npm prepare` y `npm install`.

#### 2.1 Ejecutar `npm prepare`

El primer paso es ejecutar el siguiente comando:

`npm prepare`

Este comando instalará Husky, una herramienta que se encargará de configurar eventos de Git para garantizar que el código cumpla con las reglas establecidas antes de confirmar los cambios. Husky es esencial para mantener la calidad del código en tu proyecto.

#### 2.2 Ejecutar `npm install`

Una vez que `npm prepare` haya terminado, procede a instalar las dependencias del proyecto utilizando el siguiente comando:

`npm install`

Este comando leerá el archivo `package.json` y descargará todas las dependencias necesarias para tu proyecto, incluyendo Next.js, React, Redux Toolkit, Sass, Jest y otras bibliotecas que se mencionan en el archivo `package.json`.

## Uso

Para desarrollar tu aplicación, puedes utilizar los siguientes comandos:

- `npm run dev`: Inicia un servidor de desarrollo con Next.js.
- `npm run build`: Compila la aplicación para producción.
- `npm start`: Inicia la aplicación en modo de producción.
- `npm run lint`: Ejecuta ESLint para verificar el estilo y la calidad del código.
- `npm test`: Ejecuta las pruebas unitarias con Jest.

## Estructura de Carpetas

- `/src`: Contiene el código fuente de la aplicación.
  - `/app`: Componentes principales de la aplicación.
  - `/components`: Componentes reutilizables.
  - `/hooks`: Hooks personalizados.
  - `/models`: Interfaces y types utilizados en el proyecto.
  - `/services`: Lógica de servicio para el cliente y el servidor (redux, server).
    - `/redux`: Configuración de Redux Toolkit Query.
    - `/server/fetch`: Funciones para realizar solicitudes al servidor.
    - `/server/repositories`: Repositorios para el manejo de datos del servidor.
  - `/store`: Definiciones de almacenamiento Redux.
  - `/test`: Configuracion de las pruebas unitarias

## Estándares de Codificación

- Siga las convenciones de nomenclatura de interfaces y types, prefijando las interfaces con "I" (ejemplo: `IUser`, `ICart`).
- Utilice una interfaz en línea si solo tiene una única propiedad en el componente.
- Para las pruebas, se utilizan Jest y las bibliotecas de prueba de React.

## Estilos (BEM)

Se utiliza la metodología BEM (Block, Element, Modifier) para nombrar clases CSS de manera consistente y facilitar la legibilidad y el mantenimiento del código. Los estilos se administran utilizando el preprocesador Sass.

## Contribuciones

Siéntete libre de contribuir a este proyecto modelo. Puedes abrir problemas (issues) o enviar solicitudes de extracción (pull requests) para proponer mejoras, correcciones de errores o nuevas características.
