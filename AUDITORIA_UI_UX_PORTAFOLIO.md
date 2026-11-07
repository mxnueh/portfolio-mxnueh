# Auditoría UI/UX del portafolio

## Alcance

Esta auditoría revisa el repositorio desde la perspectiva de producto, contenido y sistema de interfaz. El foco no está en “embellecer” la página, sino en corregir cómo el portafolio comunica valor, cómo jerarquiza la información y cómo usa tipografía, color, espaciado y llamadas a la acción para sostener esa comunicación.

Se analizaron principalmente `src/app`, `src/components`, `src/data`, `src/app/globals.css` y `tailwind.config.ts`.

## Diagnóstico general

El repositorio no falla por falta de intención visual. Falla porque todavía transmite la sensación de una plantilla parcialmente completada. La interfaz promete madurez, criterio y claridad, pero el contenido y la arquitectura no terminan de sostener esa promesa.

Los problemas más graves son estos:

1. La arquitectura de navegación promete páginas que no existen.
2. Hay placeholders visibles en zonas de máxima exposición.
3. La versión en español no está realmente localizada.
4. Las llamadas a la acción no siempre llevan a un destino real.
5. El sistema tipográfico está fragmentado entre una versión inglesa y otra española.
6. La paleta funciona como base, pero la jerarquía de color no está afinada para textos secundarios, enlaces y estados de énfasis.
7. La narrativa general del sitio no define con precisión si el portafolio quiere vender perfil profesional, servicios, productos o contenido editorial.

## Hallazgos transversales

### Posicionamiento

La home intenta ser varias cosas al mismo tiempo: CV premium, portfolio de proyectos, catálogo de productos, blog técnico y landing de contratación. El resultado no es versátil, sino ambiguo. Un visitante no entiende en los primeros segundos cuál es la prioridad del sitio.

El posicionamiento actual de `Full Stack Developer & Systems Designer` tiene potencial, pero necesita una segunda capa más concreta. La promesa debe aterrizar en un tipo de problema, un tipo de cliente o un tipo de impacto. Ahora mismo el mensaje es competente, pero todavía genérico.

### Integridad del contenido

El mayor problema de credibilidad es que el sistema expone contenido no terminado. Hay múltiples textos `[ADD ...]` en `src/data/content.en.json`, `src/data/content.es.json`, `src/data/products.ts`, `src/data/posts.ts` y `src/data/caseStudies.ts`.

Eso rompe la experiencia por dos motivos. Primero, porque el usuario percibe una obra incompleta. Segundo, porque la interfaz intenta sostener un tono de excelencia mientras enseña partes que parecen borrador.

### Consistencia entre idiomas

La versión en español no es una localización real. En `src/data/content.es.json` se mezclan frases en español con titulares en inglés y expresiones híbridas como `experiencias delightful`. Además, `postsES`, `productsES` y `caseStudiesES` son copias de la versión inglesa.

Esto no es un detalle menor. Cuando una versión parece traducida a medias, todo el sitio pierde refinamiento editorial. Si se ofrece español, el español debe sentirse nativo, no provisional.

### Rutas y estructura

La navegación y el footer enlazan a rutas que no están implementadas en `src/app`. Existen `page.tsx` para la home y para detalles de `blog`, `products` y `work`, pero no existen páginas índice para `contact`, `about`, `blog`, `work`, `products`, `privacy`, `terms` ni `refunds`.

La consecuencia es crítica: el usuario recibe señales de profundidad estructural que no son reales. A nivel de UX, eso daña la confianza más rápido que cualquier error de color o espaciado.

### Sistema tipográfico

La versión inglesa usa muchas decisiones tipográficas hardcodeadas en la página, mientras que la versión española intenta apoyarse en tokens como `text-hero`, `text-subhead` o `text-card-title`. El problema es que ambos enfoques conviven sin una misma lógica.

Además, el código hace referencia a clases como `text-hero-tablet`, `text-hero-mobile`, `text-section-tablet`, `text-card-title-mobile` y similares, pero esas extensiones no aparecen definidas en `tailwind.config.ts`. Aunque la intención de jerarquía es correcta, la implementación del sistema no es confiable ni coherente.

### Color y contraste

La base cromática es sólida. Los tokens de `src/app/globals.css` están razonablemente bien planteados y la paleta sugiere un lenguaje sobrio con acento tecnológico. El problema no está en la selección primaria de colores, sino en su uso jerárquico.

Los textos terciarios en tamaños pequeños quedan demasiado débiles en footer, controles y metadatos. También hay componentes que reutilizan el color de enlace azul dentro de fondos con gradiente azul-morado, lo que baja contraste y claridad de acción.

### Llamadas a la acción

La home insiste mucho en acciones como `Hire me`, `Get in touch`, `Contactarme` o `Download CV`, pero la infraestructura de esas acciones no está terminada. Una CTA sin destino real no es una pequeña deuda técnica: es una promesa incumplida.

Además, la sección de productos usa verbos de compra cuando los propios datos del producto siguen en estado `Coming soon` o `Waitlist`. La interfaz empuja al usuario a avanzar, pero el contenido le niega ese avance.

## Auditoría por sección

### Navegación global

`src/components/GlobalNav.tsx` intenta proyectar una navegación editorial y limpia, pero hoy comunica más de lo que la app puede respaldar. El menú principal contiene `Work`, `Products`, `Blog`, `About` y `Contact`, aunque varias de esas páginas no existen como índice real.

El CTA de la navegación es demasiado protagonista para una acción que no está operativa. Si la página de contacto no existe, ese botón no debería ser el gesto dominante del header. Antes de aumentar conversión, primero hay que garantizar destino.

#### Mejora propuesta

- Reducir la navegación a rutas realmente disponibles.
- No mostrar un CTA primario hasta que `contact` exista.
- Definir un solo propósito para el header: explorar trabajo, convertir a contacto o llevar a productos. No los tres a la vez.

### Hero

El hero tiene buena intención verbal, pero le falta precisión. `I build systems that solve real problems, and the interfaces that bring them to life` es una base correcta, aunque todavía demasiado amplia para diferenciar un perfil senior frente a cientos de portfolios similares.

La versión en español empeora el problema al mezclar idiomas y dejar expresiones poco naturales. Además, el área visual del hero renderiza un placeholder textual en lugar de una prueba concreta, con lo que el bloque más importante del sitio termina comunicando “pendiente”.

Tipográficamente, el hero quiere ser grande, editorial y dominante, pero el sistema no es consistente entre idiomas. En inglés se usan tamaños directos como `text-5xl`, `text-6xl`, `text-7xl`. En español se usan tokens del sistema con sufijos que no parecen existir.

#### Mejora propuesta

- Reescribir el titular para que nombre especialidad y contexto, no solo rol.
- Cambiar el lead para que hable de resultados y criterio, no de una lista amplia de capacidades.
- Sustituir el placeholder por una prueba de trabajo real o eliminar el bloque visual hasta tener evidencia.
- Unificar la escala tipográfica del hero en ambos idiomas.

### Sección `At a glance`

Esta sección debería funcionar como compresión de valor. Ahora mismo funciona más como mosaico de datos sueltos. Hay credenciales interesantes, pero no están ordenadas por relevancia para la decisión del usuario.

Por ejemplo, `English B2`, `Google Summer of Code 2026` y `4 hackathon finals, 2 of them NASA` no comparten una misma lógica de lectura. Unas son credenciales, otras son contexto académico, otras son logros, otras son capacidades. La sección mezcla categorías distintas dentro de una cuadrícula que parece homogénea.

En español, además, aparece `Frontend to backend`, sin traducir, junto a otras tarjetas traducidas. Eso rompe continuidad lingüística y hace que la sección se sienta menos pensada.

#### Mejora propuesta

- Separar credenciales, stack y enfoque profesional en grupos semánticos distintos.
- Reescribir cada tarjeta para que responda a una sola pregunta.
- Evitar mezclar tecnología, logros y disponibilidad comercial dentro del mismo plano visual.
- Darle a la tarjeta de disponibilidad un tono menos vendedor y más contextual.

### Sección de productos

La idea de mostrar productos puede enriquecer el portfolio, pero hoy debilita la credibilidad porque el contenido no está listo. `src/data/products.ts` contiene placeholders en nombre, categoría, precio, beneficios, FAQ y activos visuales.

El problema aquí no es solo que falte contenido. El problema es que la sección ocupa una zona premium de la home y adopta lenguaje transaccional sin tener todavía propuesta de producto concreta. En español incluso aparece `Comprar` para productos que siguen marcados como `Coming soon` o `Waitlist`.

Tipográficamente, la sección intenta elevar el precio y el nombre del producto, pero al no existir un token claro para `text-price`, esa jerarquía queda conceptual, no sistematizada.

#### Mejora propuesta

- Ocultar por completo la sección hasta que exista al menos un producto real.
- Si se quiere mantener, convertirla temporalmente en una sección de `Experimentos`, `Herramientas` o `Próximos lanzamientos`, con lenguaje honesto.
- No usar verbos de compra hasta que exista disponibilidad real.
- Definir una escala tipográfica específica para nombre, subtítulo y precio.

### Trabajo seleccionado

Es la sección con mayor potencial del sitio porque es la que más puede demostrar criterio real. Los casos de estudio tienen buenos temas y un repertorio técnico interesante, pero la presentación aún no hace justicia a ese material.

Los resúmenes son claros, aunque todavía bastante descriptivos. Falta más lenguaje de impacto: qué se resolvió, por qué era difícil, qué cambió para el usuario o el proyecto. Hoy muchos textos cuentan el proyecto, pero no terminan de vender la capacidad detrás del proyecto.

También hay un problema práctico: el detalle del caso de estudio en `src/app/work/[slug]/page.tsx` imprime markdown dentro de un contenedor `prose` sin parser visible, por lo que es probable que los encabezados y listas se muestren como texto crudo. Una pieza central del portfolio no puede parecer un dump de contenido.

#### Mejora propuesta

- Reescribir cada teaser con estructura `contexto + decisión + resultado`.
- Añadir una frase de impacto o criterio por proyecto.
- Resolver la representación del contenido largo para que no se vea como markdown literal.
- Usar el área visual del caso de estudio para evidencia real, no para placeholders.

### Blog

La sección de blog está bien como mecanismo de autoridad, pero no debería competir por atención con trabajo y contacto si aún no tiene un catálogo sólido detrás. Hoy el blog aparece como otra promesa estructural, pero la ruta índice no existe.

Los títulos y extractos son correctos, aunque algo genéricos en algunas entradas. El mayor problema no es editorial, sino estructural: el bloque invita a explorar más, pero la experiencia de navegación no está completa.

Además, al truncar títulos y extractos con `line-clamp-2`, el contenido pierde matiz sin una alternativa clara de información secundaria. Si se va a condensar tanto, el texto visible tiene que ser mucho más afilado.

#### Mejora propuesta

- Mantener solo posts que refuercen el posicionamiento profesional.
- Crear primero la página índice antes de usar el blog como sección principal.
- Reescribir excerpts para que cada uno prometa una idea concreta.
- Bajar la prioridad visual del blog hasta que la base de contenido sea más robusta.

### CTA de cierre

El bloque final repite la intención comercial del hero, pero sin aportar una razón nueva para convertir. Es un cierre correcto a nivel de patrón, pero no a nivel narrativo. El usuario ya recibió una invitación similar arriba.

El segundo CTA, `Download CV` o `Descargar CV`, no tiene destino real. Eso daña mucho más el cierre que si simplemente no existiera. Cuando el último bloque de la página falla, la sensación final del recorrido también falla.

#### Mejora propuesta

- Reescribir el cierre para que resuma valor, no para repetir el mismo imperativo.
- Usar un solo CTA principal con destino real.
- Mostrar `CV` solo si existe archivo y contexto para descargarlo.

### Footer

`src/components/Footer.tsx` tiene una estructura amplia y elegante, pero el contenido no está listo para soportarla. El footer promete secciones legales, categorías de producto y controles de experiencia, aunque buena parte de esa capa no tiene correlato real en la app.

El texto secundario usa una jerarquía demasiado tenue. A nivel visual puede parecer refinado, pero a nivel de lectura práctica pierde presencia. En controles como idioma, tema o pausa de animación, la prioridad percibida es demasiado baja para su importancia funcional.

La columna de productos también revela una decisión de información no cerrada. Hay placeholders filtrados mediante lógica, lo que evita ver algunos errores, pero también confirma que la estructura está más adelantada que el contenido.

#### Mejora propuesta

- Simplificar el footer a enlaces reales y útiles.
- Reducir el bloque legal hasta que existan páginas legales.
- Dar más contraste a los textos de soporte y controles.
- Mantener solo controles de interfaz que realmente cambien el estado global.

### Páginas de detalle

Las páginas `src/app/blog/[slug]/page.tsx`, `src/app/work/[slug]/page.tsx` y `src/app/products/[slug]/page.tsx` comparten una intención sobria, pero todavía se sienten como fichas base. Son válidas como estructura inicial, no como experiencia terminada.

La página de producto es la más débil de las tres porque intenta cerrar una acción comercial con datos incompletos y un botón que en algunos casos no conduce a nada. La página de blog, por su parte, usa metadatos simples y un placeholder visual que vuelve a restar autoridad editorial.

En todas falta una capa de presentación más estratégica: mejor ritmo vertical, evidencia visual real, bloques de lectura más digestivos y una jerarquía más clara entre resumen, cuerpo, metadata y acción siguiente.

#### Mejora propuesta

- Diseñar una plantilla específica para cada tipo de contenido.
- No reutilizar el mismo lenguaje de “bloque genérico con gradiente” como sustituto de evidencia.
- Incorporar navegación de retorno real a páginas índice existentes.

## Directrices finales

### Voz y copy

La voz debe sonar técnica, clara y adulta. No hace falta que el sitio se exprese como agencia ni como startup. Debe hablar como un constructor serio que entiende producto, interfaz y sistema.

Las frases deben cumplir cuatro reglas:

1. Nombrar contexto antes que adjetivos.
2. Hablar de decisiones antes que de herramientas.
3. Usar verbos concretos en lugar de promesas vacías.
4. Evitar anglicismos mezclados con español si no aportan precisión real.

### Arquitectura de contenido

El sitio debe elegir una prioridad principal. La mejor opción para este repositorio, por el material disponible, es esta:

1. Trabajo y casos de estudio
2. Posicionamiento profesional
3. Contacto
4. Blog como refuerzo
5. Productos solo cuando existan de verdad

Si se mantiene todo a la vez, el orden visual y verbal debe respetar esa prioridad. No conviene que productos compitan con casos de estudio mientras siguen en estado de relleno.

### Sistema tipográfico

La tipografía debe pasar de “uso de clases variadas” a “sistema con funciones claras”. Las piezas mínimas a definir son:

- `eyebrow`
- `body`
- `body-large`
- `lead`
- `card-title`
- `section-title`
- `hero-title`
- `price` o equivalente transaccional, si realmente se venderán productos

Cada token debe existir de forma real, no inferida. No conviene usar sufijos `mobile` o `tablet` si esos tokens no están implementados.

### Color

La paleta base puede mantenerse, pero el uso debe seguir estas reglas:

1. El texto terciario no debe cargar información importante.
2. Los enlaces deben tener contraste suficiente con su fondo.
3. Los gradientes deben reservarse para bloques con función clara, no como relleno genérico.
4. El color de acento debe señalar acción o foco, no sustituir evidencia visual.

### CTAs

Toda CTA visible debe cumplir tres condiciones:

1. Tiene un destino real.
2. Ese destino responde a la intención verbal del botón.
3. El usuario obtiene algo coherente con la promesa del texto.

Si una acción no está disponible, debe ocultarse o reformularse. Nunca simular disponibilidad.

### Localización

La versión en español solo debería permanecer publicada si se completa por entero. Si no, es mejor dejar una sola versión sólida antes que dos versiones desiguales.

El criterio no debe ser “traducido o no traducido”, sino “natural o no natural”. Una versión localizada debe sonar escrita para ese idioma.

## Plan de mejora por área

| Área | Problema principal | Mejora prioritaria | Resultado esperado |
| --- | --- | --- | --- |
| Navegación | Promete rutas que no existen | Reducir menú y footer a páginas reales | Más confianza y menor fricción |
| Hero | Mensaje amplio y evidencia débil | Reescribir propuesta de valor y sustituir placeholder | Primera impresión más clara y creíble |
| At a glance | Mezcla logros, stack y disponibilidad | Reagrupar tarjetas por intención semántica | Lectura más limpia y rápida |
| Productos | Contenido aún ficticio | Ocultar sección o relanzarla como experimental | Menos ruido y menos promesas vacías |
| Casos de estudio | Buena materia prima, presentación floja | Reescribir teasers y mejorar la plantilla de detalle | Mayor percepción de seniority |
| Blog | Existe como intención, no como sistema | Crear índice real y editar extractos con más precisión | Autoridad editorial más coherente |
| CTA final | Repite el hero y ofrece acciones rotas | Dejar un solo CTA válido y contextual | Mejor cierre de página |
| Footer | Demasiada estructura para poco contenido real | Simplificar enlaces, legales y controles | Menos ruido cognitivo |
| Tipografía | Sistema partido entre EN y ES | Unificar tokens y romper dependencia de clases ad hoc | Consistencia visual real |
| Color | Uso débil del texto secundario y enlaces | Rebalancear contraste y jerarquía de énfasis | Mejor legibilidad y claridad |
| Localización | Español incompleto y mezclado | Traducir todo o retirar ES temporalmente | Más calidad editorial |
| Rutas | Muchas páginas ausentes | Implementar índices mínimas de `work`, `blog`, `products` y `contact` | Arquitectura creíble y navegable |

## Orden recomendado de ejecución

### Etapa 1

Corregir rutas, CTAs y placeholders. Mientras eso siga roto, cualquier mejora visual será cosmética.

### Etapa 2

Definir el posicionamiento del portfolio y reescribir hero, `At a glance`, casos de estudio y cierre.

### Etapa 3

Unificar el sistema tipográfico y revisar contraste, jerarquía de color y consistencia entre componentes.

### Etapa 4

Completar o retirar la versión en español, y decidir si productos merecen seguir visibles en la home.

## Cierre

El repositorio ya tiene un buen punto de partida: tono sobrio, intención editorial y un marco visual capaz de crecer. Lo que hoy le impide verse senior no es el estilo base, sino la diferencia entre lo que promete y lo que realmente sostiene.

Si se corrige primero la integridad del contenido, luego la arquitectura y después la jerarquía tipográfica, el portafolio puede pasar de “plantilla con potencial” a “sistema de presentación profesional con criterio”.
