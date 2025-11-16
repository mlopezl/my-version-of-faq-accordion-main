# Frontend Mentor – Solución FAQ Accordion

Esta es mi solución para el desafío **FAQ Accordion** en [Frontend Mentor](https://www.frontendmentor.io/).  
El desafío me ayudó a mejorar mis habilidades en HTML, CSS y JavaScript construyendo un componente interactivo de preguntas frecuentes (FAQ).

## Tabla de Contenidos
- [Descripción General](#descripción-general)  
- [El Desafío](#el-desafío)  
- [Diseño](#diseño)  
- [Enlaces](#enlaces)  
- [Mi Proceso](#mi-proceso)  
- [Tecnologías Usadas](#tecnologías-usadas)  
- [Lo Que Aprendí](#lo-que-aprendí)

## Descripción General
Este proyecto es un **acordeón interactivo de preguntas frecuentes (FAQ)**.  
Los usuarios pueden hacer clic en el encabezado de una pregunta para mostrar u ocultar su respuesta. Solo una respuesta es visible a la vez, y las demás respuestas se cierran automáticamente.  
El diseño es limpio y responsivo, con un patrón de fondo, tipografía personalizada y transiciones suaves de mostrar/ocultar.

## El Desafío
Los usuarios deberían poder:

- Ver una lista de preguntas frecuentes (FAQ).  
- Alternar cada pregunta para mostrar u ocultar su contenido.  
- Asegurarse de que al abrir una pregunta se cierre cualquier otra que estuviera abierta.  
- Experimentar el componente en diferentes tamaños de pantalla (responsive).  
- Interactuar de manera accesible mediante clic para alternar las preguntas.

## Diseño
### Diseño de Escritorio  
![Diseño de Escritorio](./design/desktop-design.jpg)

### Diseño Móvil  
<img src="./design/mobile-design.jpg" width="200px" alt="Diseño móvil">

### Íconos de Alternancia  
Cuando una pregunta está cerrada → se muestra el ícono de **más**.  
Cuando una pregunta está abierta → se muestra el ícono de **menos**.

## Enlaces
- **URL de la Solución:** [Repositorio en GitHub](https://github.com/mlopezl/my-version-of-faq-accordion-main)  
- **URL del Sitio en Vivo:** [Demo en Vivo](https://mlopezl.github.io/my-version-of-faq-accordion-main/)

## Mi Proceso
1. Construí la estructura HTML usando etiquetas semánticas (`<article>`, `<section>`, `<header>`).  
2. Definí variables CSS para la paleta de colores y utilicé `@font-face` para importar una fuente personalizada.  
3. Estilicé el contenedor del acordeón, los títulos, los íconos y el contenido.  
4. Usé la clase `.hide` para alternar la visibilidad de los íconos y del contenido.  
5. Implementé escuchadores de eventos en JavaScript para los clics en cada encabezado de pregunta.  
6. Creé una función auxiliar para cerrar cualquier ítem abierto del acordeón cuando se abre otro.  
7. Agregué **responsividad** con media queries para ajustar el diseño y el fondo en dispositivos móviles.

## Tecnologías Usadas
- **HTML5**  
- **CSS3** (Flexbox, variables CSS, media queries)  
- **JavaScript** (Manipulación del DOM, event listeners)

## Lo Que Aprendí
- Cómo **alternar mostrar/ocultar** elementos usando JavaScript y CSS (`.hide`).  
- Cómo asegurar que **solo un ítem del acordeón esté abierto** a la vez manejando el estado entre varios elementos.  
- Cómo aplicar una **fuente personalizada** usando `@font-face`.  
- Cómo usar **variables CSS** para un sistema de diseño consistente.  
- Cómo hacer un componente **responsive** con media queries.  
- Cómo manejar suposiciones sobre la estructura del DOM (por ejemplo, el orden de los hijos) de manera confiable en los event listeners.
