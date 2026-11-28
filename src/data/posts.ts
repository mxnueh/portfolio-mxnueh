import type { Language, Post } from '@/lib/types';

type PostCopy = Pick<Post, 'title' | 'excerpt' | 'content'>;
type PostEntry = Omit<Post, keyof PostCopy | 'lang' | 'readingTime'> & Record<Language, PostCopy>;

const entries: PostEntry[] = [
  {
    id: '1',
    slug: 'mission-atabey',
    image: '/img/blog/covers/mission-atabey.webp',
    category: 'Case study',
    date: '2024-06-15',
    featured: true,
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'MQTT', 'ESP32', 'Raspberry Pi'],
    en: {
      title: 'Mission Atabey: A Telemetry Platform for Mars-Analog Exploration',
      excerpt: 'How a Dominican Mars-analog habitat collected crew, environmental, and crop data over an intermittent connection.',
      content: `Mission Atabey recreated parts of life in a Martian habitat in the Dominican Republic. The simulation included crew quarters and a hydroponic crop dome, with instruments spread across both. As telemetry lead, I worked on the path from those instruments to the mission dashboard. Every reading needed enough context for an operator to decide whether to act.

## From the sensor to the dashboard

ESP32 nodes collected environmental readings such as temperature, humidity, and CO₂, along with measurements from the crop dome. The field nodes sent readings over LoRa to a Raspberry Pi gateway. A local MQTT broker gave the rest of the system a consistent way to receive messages from different instruments.

The gateway stored timestamped readings in SQLite. When it could reach the cloud, it forwarded the queue to a FastAPI backend that wrote to PostgreSQL. That local queue mattered because the simulated habitat could lose its uplink while the instruments kept working. The dashboard could recover the history when the connection returned, with readings ordered by when they were taken.

## The operator needs context

Imagine a humidity reading reaching mission control several minutes late. The operator needs to know that it describes a previous condition, especially if they are deciding whether to check the crop dome. A useful chart makes the time of measurement and gaps in the series visible. The mission dashboard grouped readings by habitat area so operators could connect a change in the data to a specific part of the installation.

Crew biometrics presented a different question. Environmental readings could be shared more widely, while crew measurements belonged in a restricted view. PostgreSQL row-level security enforced that distinction at the data layer. That mattered across the dashboard, the API, and any other view that queried the same records.

## What I took from the project

An alert and its history serve different purposes. The alert gives the operator something to investigate. The history helps them see whether the condition is changing and when it began. I came away paying closer attention to timestamps, permissions, and what an interface can still communicate when its connection is unreliable.

[Read the Mission Atabey case study](/work/mission-atabey).`,
    },
    es: {
      title: 'Misión Atabey y la telemetría de un hábitat análogo a Marte',
      excerpt: 'Cómo un hábitat análogo dominicano recopilaba datos de la tripulación, el ambiente y los cultivos con una conexión intermitente.',
      content: `Misión Atabey recreó en República Dominicana parte de la vida en un hábitat marciano. La simulación incluía espacios para la tripulación y un domo de cultivos hidropónicos, con instrumentos repartidos entre ambos. Como líder de telemetría, trabajé en el recorrido de los datos desde esos instrumentos hasta el panel de control. Cada lectura debía llegar con suficiente contexto para que el operador pudiera decidir si intervenir.

## Del sensor al panel

Los nodos ESP32 recogían datos ambientales como temperatura, humedad y CO₂, además de las mediciones del domo de cultivos. Enviaban las lecturas por LoRa a una Raspberry Pi que funcionaba como pasarela. Un intermediario MQTT local permitía que el resto del sistema recibiera de la misma forma los mensajes de distintos instrumentos.

La pasarela guardaba las lecturas con su hora de medición en SQLite. Al recuperar el acceso a internet, enviaba la cola a un servicio en FastAPI que persistía los datos en PostgreSQL. La cola local era importante porque el hábitat simulado podía perder su enlace al servidor mientras los instrumentos seguían midiendo. Cuando volvía la conexión, el panel podía recuperar el historial según la hora en que se tomó cada lectura.

## Qué necesita saber el operador

Imagina que una lectura de humedad llega al control de misión con varios minutos de retraso. El operador necesita reconocer que corresponde a un momento anterior, en especial si está decidiendo si revisar el domo. Un gráfico útil deja visibles la hora de medición y los intervalos sin datos. El panel agrupaba las lecturas por área del hábitat para que un cambio en el gráfico se pudiera relacionar con un lugar concreto.

Los datos biométricos de la tripulación exigían otro nivel de acceso. Las mediciones ambientales podían compartirse con más personas, mientras que los datos de la tripulación quedaban restringidos. PostgreSQL aplicaba esa separación mediante permisos a nivel de fila, incluso cuando el panel y otros servicios consultaban la misma base de datos.

## Qué aprendí del proyecto

Una alerta le indica al operador qué merece atención. El historial le ayuda a entender cuándo comenzó el cambio y cómo evolucionó. Desde entonces presto más atención a la hora de cada dato, a quién puede verlo y a lo que la interfaz puede comunicar aunque la conexión sea inestable.

[Lee el caso de estudio de Misión Atabey](/es/work/mission-atabey).`,
    },
  },
  {
    id: '2',
    slug: 'conduete-app',
    image: '/img/blog/covers/conducete.webp',
    category: 'Case study',
    date: '2024-05-20',
    featured: true,
    stack: ['Flutter', 'Dart', 'Python', 'Flask', 'PostgreSQL'],
    en: {
      title: 'Conducete: Gamified Road Safety for Dominican Drivers',
      excerpt: 'How we turned mobile trip data into driving feedback that people could review after reaching their destination.',
      content: `Conducete explored a way to encourage defensive driving in the Dominican Republic. A driver could finish a trip, see a score, and review the parts of the route that contributed to it. I worked on the Flutter application, the route visualization, and the backend that kept trip history and scores together.

## Reading a trip

The app used signals from the phone and its location to look at three aspects of a trip. Sudden acceleration, abrupt braking, and speed consistency each told us something different. Flask handled the scoring API and PostgreSQL stored the trips so a driver could return to a previous route and look for patterns over time.

A single event needs context. Hard braking may be the safest response to someone stepping into the road. The score helped flag a segment worth reviewing, while the map showed where it happened. With color-coded segments on the completed route, drivers could compare a cluster of events with an isolated one and think back to the conditions they faced.

## Giving the score a purpose

The project explored points, badges, and leaderboards as ways to reinforce good habits. Those elements made the most sense when a driver could trace a score back to something they recognized from the trip. A change in the total is more useful when the driver can see which stretch of road contributed to it.

That also shaped the mobile experience. Passive collection let the phone record during the trip. The route, events, and rewards could be reviewed after arrival, when the driver had time to look at them together.

## What the prototype let us test

Simulated urban routes gave us a way to test how the interface and scoring pipeline behaved together. The design also anticipated areas with poor coverage by allowing for local trip storage and later synchronization. Measuring whether the app changes driving behavior would take field testing with repeated trips, different road conditions, and a way to distinguish a score change from a change in the route itself.

[Read the Conducete case study](/work/conduete).`,
    },
    es: {
      title: 'Conducete y la seguridad vial a través del juego',
      excerpt: 'Cómo convertimos los datos del celular en información que los conductores podían revisar al terminar el trayecto.',
      content: `Conducete exploró una forma de fomentar la conducción defensiva en República Dominicana. Al terminar un viaje, el conductor podía consultar su puntuación y ver qué partes del recorrido habían influido en ella. Trabajé en la aplicación móvil en Flutter, en la visualización de rutas y en el servicio que vinculaba el historial de viajes con las puntuaciones.

## Cómo se interpreta un trayecto

La aplicación utilizaba señales del teléfono y datos de ubicación para evaluar tres aspectos del recorrido. La aceleración brusca, el frenado repentino y la regularidad de la velocidad aportaban información distinta. Flask atendía las solicitudes de puntuación y PostgreSQL guardaba los trayectos para que el conductor pudiera volver a consultarlos y reconocer patrones.

Un evento aislado necesita contexto. Frenar de golpe puede ser la respuesta más segura si alguien cruza la calle. La puntuación permitía señalar un tramo que valía la pena revisar, y el mapa mostraba dónde había ocurrido. Los segmentos de colores ayudaban a distinguir varios eventos seguidos de uno aislado y a recordar las condiciones de ese tramo.

## Para qué sirve la puntuación

El proyecto exploró puntos, insignias y tablas de clasificación para reforzar buenos hábitos. Esos elementos tenían más sentido cuando el conductor podía relacionar la puntuación con algo que recordaba del viaje. Si el total cambia, poder ubicar el tramo que influyó en ese cambio hace que el dato sea más fácil de interpretar.

Esa idea también guió el diseño móvil. El celular recopilaba información en segundo plano durante el trayecto. Al llegar, el conductor podía revisar la ruta, los eventos y las recompensas con tiempo para entender cómo se relacionaban.

## Qué pudimos probar con el prototipo

Los trayectos urbanos simulados permitieron evaluar cómo funcionaban juntas la interfaz y la lógica de puntuación. El diseño también contemplaba guardar recorridos localmente para sincronizarlos cuando volviera la conexión. Para medir cambios en los hábitos de conducción harían falta pruebas de campo con viajes repetidos, distintas condiciones viales y una forma de separar el efecto de la aplicación de las diferencias entre las rutas.

[Lee el caso de estudio de Conducete](/es/work/conduete).`,
    },
  },
  {
    id: '3',
    slug: 'floppy-flood-monitoring',
    image: '/img/blog/covers/floppy-flood-monitoring.webp',
    category: 'Case study',
    date: '2025-08-23',
    featured: true,
    stack: ['ESP32', 'Flask', 'React', 'SMS', 'Push Notifications'],
    en: {
      title: 'Floppy: A Flood-Monitoring Prototype',
      excerpt: 'The CreaRD prototype that measured rising water and explored how to relay warnings through a dashboard, SMS, and push notifications.',
      content: `Floppy started with a practical question. If the water near a community begins to rise, how does a measurement reach the people who need to see it? At the 2025 CreaRD hackathon, we built a prototype that connected a field sensor, a web dashboard, and notification channels. It placed fourth at the event.

## Measuring water without touching it

The field node paired an ESP32 with an ultrasonic sensor. From a fixed mounting point, the sensor measured the distance to the surface. When that distance decreased, the water was closer to the node. The prototype sampled at intervals and sent readings to a Flask service, which could compare them with thresholds for the monitoring site.

The surface of a river is rarely still. A ripple or debris can produce an unusual reading that disappears on the next sample. We applied a moving median in the firmware so the threshold logic received a measurement that was less sensitive to isolated spikes. The recent measurements still mattered because a sustained change called for a different interpretation from a single jump.

## A dashboard and a message solve different problems

The React dashboard displayed recent levels, the rate at which water was rising, and sensor status. That gave an operator a way to compare the latest measurement with the recent trend. Sensor status also helped distinguish a steady level from gaps caused by a node that had stopped reporting.

The alert flow sent messages through SMS or push notifications. SMS gave the prototype a way to reach a phone without requiring the recipient to open the dashboard or use mobile data. A field deployment would need messages that clearly identify the location, the time of the reading, and the alert level. Thresholds and notification procedures would need to be validated for each site with the people responsible for the response.

## What we demonstrated

The hackathon prototype connected the full path from measurement to notification. A longer field pilot would let us check sensor calibration across changing conditions, test what happens during communication outages, and find out whether recipients interpret the messages as intended.

[Read the Floppy case study](/work/floppy). [Browse the Floppy source code](https://github.com/mxnueh/floppy).`,
    },
    es: {
      title: 'Floppy, un prototipo para monitorear crecidas',
      excerpt: 'El prototipo de CreaRD que medía el ascenso del agua y exploraba cómo avisar mediante un panel, SMS y notificaciones push.',
      content: `Floppy nació de una pregunta práctica. Si el agua empieza a subir cerca de una comunidad, ¿cómo llega esa medición a quien necesita conocerla? En la hackatón CreaRD de 2025 construimos un prototipo que conectaba un sensor de campo, un panel web y varios canales de aviso. El proyecto obtuvo el cuarto lugar.

## Medir el nivel sin tocar el agua

El nodo de campo combinaba un ESP32 con un sensor ultrasónico. Desde un punto fijo, el sensor medía la distancia hasta la superficie. Cuando esa distancia disminuía, el agua estaba más cerca del nodo. El prototipo tomaba muestras a intervalos y las enviaba a un servicio en Flask, que las comparaba con los umbrales del lugar de monitoreo.

La superficie de un río rara vez está quieta. Una ondulación o un objeto arrastrado por la corriente puede causar una lectura atípica que desaparece en la siguiente muestra. Aplicamos una mediana móvil en el firmware para que la lógica de alertas fuera menos sensible a esos saltos aislados. Las mediciones recientes seguían siendo necesarias para distinguir una subida sostenida de una variación puntual.

## El panel y el aviso cumplen funciones distintas

El panel en React mostraba los últimos niveles, la velocidad de ascenso del agua y el estado del sensor. Así, un operador podía comparar el valor más reciente con la tendencia. El estado del dispositivo también ayudaba a diferenciar un nivel estable de una interrupción en el envío de lecturas.

El sistema de avisos utilizaba SMS y notificaciones push. Con el SMS era posible llegar a un teléfono sin que la persona tuviera que abrir el panel ni usar datos móviles. Para un despliegue real, el mensaje tendría que identificar con claridad el lugar, la hora de la medición y el nivel de alerta. Los umbrales y procedimientos de aviso se tendrían que validar para cada sitio junto con quienes coordinan la respuesta.

## Qué demostramos en la hackatón

El prototipo completó el recorrido desde la medición hasta su notificación. Un piloto de campo más largo permitiría comprobar la calibración del sensor con distintas condiciones, observar qué sucede durante cortes de comunicación y revisar si las personas interpretan los mensajes como se espera.

[Lee el caso de estudio de Floppy](/es/work/floppy). [Consulta el código fuente de Floppy](https://github.com/mxnueh/floppy).`,
    },
  },
  {
    id: '4',
    slug: 'working-with-ai-agents',
    image: '/img/blog/covers/working-with-ai-agents.webp',
    category: 'Notes',
    date: '2025-02-10',
    featured: false,
    stack: ['Kiro', 'Codex', 'Git', 'GitHub Actions'],
    en: {
      title: 'How I Work with AI Coding Agents',
      excerpt: 'The workflow I use to turn a brief into a reviewable change, from acceptance criteria to Git and CI.',
      content: `An AI coding agent can go from a request to a diff quickly. The harder part is telling whether the diff solves the right problem. I get better results when the instructions describe behavior I can inspect and when the agent has a way to check the change before handing it back.

## Write what the user should see

I start with the outcome, the relevant files or conventions, and an example of a passing result. For a bilingual card layout, a useful brief would say where the title and description go, what happens when a long Spanish title wraps, and which viewport widths to check. Those details give the agent something concrete to inspect in the browser and give me a basis for reviewing the result.

When a request is larger, I split it along user-visible behavior. I might change the data contract in one commit and move the interface over in another once both versions work. This keeps the review focused and makes it easier to identify which change caused a regression.

## Review what changed and what was tested

I read the diff alongside the request and look for paths the happy-path demo misses. A list can be empty, a request can fail, and data created before the change may still be in use. I ask for the actual test or command that exercised each relevant case. The available checks depend on the repository. For a frontend change, a browser check at a narrow width can catch layout problems that a type checker has no reason to report.

I use Conventional Commits to give each change a recognizable purpose in Git. A commit message like **fix: preserve card alignment on mobile** tells a reviewer where to look. CI gives the team a consistent place to see which checks ran and whether they passed.

## Keep decisions legible

I keep choices that affect future changes close to the code or in the pull request description. If an assumption about the data or a trade-off about the interface mattered enough to change the implementation, it should be visible to the next reviewer. That is what makes an assisted change maintainable after the chat is gone.`,
    },
    es: {
      title: 'Cómo trabajo con agentes de IA para programar',
      excerpt: 'El flujo que uso para convertir una solicitud en un cambio revisable, desde los criterios de aceptación hasta Git y la integración continua.',
      content: `Un agente de programación puede pasar de una solicitud a modificar el código en poco tiempo. Lo más difícil es comprobar si los cambios resuelven el problema correcto. Me funciona mejor describir un comportamiento que pueda observar y dar al agente una forma de verificarlo antes de entregar el trabajo.

## Describir lo que debe ver el usuario

Empiezo por el resultado, los archivos o convenciones relevantes y un ejemplo de cómo se vería una entrega correcta. Para un diseño bilingüe de tarjetas, por ejemplo, indicaría dónde van el título y la descripción, qué pasa cuando un título largo en español ocupa varias líneas y en qué anchos de pantalla hay que comprobarlo. Eso le da al agente algo concreto que revisar en el navegador y a mí una base para evaluar el resultado.

Cuando el encargo es más grande, lo divido por cambios de comportamiento. Podría ajustar el contrato de datos en un commit y adaptar la interfaz en el siguiente, una vez comprobado que ambas versiones funcionan. Así es más fácil revisar cada parte y saber qué cambio introdujo un fallo.

## Revisar los cambios y comprobar los casos difíciles

Leo el diff junto a la solicitud y busco los casos que suelen quedar fuera de una demostración. Una lista puede estar vacía, una solicitud puede fallar y los datos creados antes del cambio pueden seguir en uso. Pido la prueba o el comando que comprobó cada caso relevante. Para un cambio de interfaz, una prueba en el navegador con una pantalla estrecha puede revelar un problema de distribución que el verificador de tipos no detectaría.

Uso Conventional Commits para que cada cambio tenga un propósito reconocible en el historial de Git. Un mensaje como **fix: preserve card alignment on mobile** indica dónde mirar durante la revisión. La integración continua deja en un solo lugar el registro de qué comprobaciones se ejecutaron y con qué resultado.

## Dejar las decisiones a la vista

Procuro documentar cerca del código o en la descripción de la solicitud de cambios las decisiones que afectarán el trabajo futuro. Si una suposición sobre los datos o una decisión de interfaz cambió la implementación, quien la revise después debería poder encontrarla. Así el cambio se puede mantener aunque la conversación con el agente ya no esté disponible.`,
    },
  },
  {
    id: '5',
    slug: 'mentoring-space-apps',
    image: '/img/blog/covers/mentoring-space-apps.webp',
    category: 'Beyond code',
    date: '2024-10-05',
    featured: false,
    stack: [],
    en: {
      title: 'Mentoring a NASA Space Apps Challenge Team',
      excerpt: 'What guiding NOVAX at Space Apps taught me about scoping a project, sharing work, and preparing a demo.',
      content: `I helped organize and guide NOVAX during the 2024 NASA Space Apps Challenge. The Santo Domingo event was held at the Instituto Tecnológico de Santo Domingo over two days. That short format shaped the work. A team had to understand the challenge, build something it could show, and explain its decisions before time ran out. [NASA Space Apps event page](https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/santo-domingo/).

## Start with a demonstration the team can finish

I like to ask what a visitor should be able to see or do in the first minute of a demo. An answer like “explore the data” still leaves several decisions open. Showing a specific input, how the project processes it, and what someone can learn from the output gives the team a smaller problem to solve.

That scoping conversation is also a chance to check the data itself. The team needs to know what a field means, which units it uses, and which parts of the question it can answer. A chart can be technically correct and still fail to support the explanation the team plans to give.

## Connect research, design, and development early

I encourage teams to agree on a small sample they can all use. The person exploring a dataset can describe what a record means. The people building the interface can agree on how to show it. Whoever presents can rehearse with the same example. Sharing one sample makes it easier to discover that the design assumes a field the dataset does not provide.

As a mentor, I try to ask questions that let people make their own decisions. If a feature is too large for the available time, I ask which part would make the biggest difference in the demo and what evidence the team could realistically collect.

## Rehearse the explanation aloud

A short rehearsal exposes gaps that are easy to miss while building. I listen for a clear problem, a specific example of what the prototype does, and a credible next step. If the presenter has to explain a screen before anyone can tell what it shows, that is useful feedback for the interface and the presentation.`,
    },
    es: {
      title: 'Acompañar a un equipo en el NASA Space Apps Challenge',
      excerpt: 'Lo que aprendí al orientar a NOVAX sobre el alcance del proyecto, la coordinación del equipo y la preparación de una demo.',
      content: `Ayudé a organizar y orientar a NOVAX durante el NASA Space Apps Challenge de 2024. La edición de Santo Domingo se celebró durante dos días en el Instituto Tecnológico de Santo Domingo. Ese formato corto condiciona el trabajo. Hay que entender el reto, preparar algo que el equipo pueda mostrar y explicar las decisiones antes de que se acabe el tiempo. [Ficha del evento en NASA Space Apps](https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/santo-domingo/).

## Empezar por una demo que se pueda terminar

Me gusta preguntar qué debería poder ver o hacer alguien durante el primer minuto de la demo. Una respuesta como «explorar los datos» deja varias decisiones pendientes. Mostrar una entrada concreta, cómo la procesa el proyecto y qué puede aprender alguien del resultado ayuda a definir un problema más manejable.

Esa conversación también sirve para revisar los datos. El equipo necesita saber qué significa cada campo, en qué unidades se expresa y qué preguntas puede contestar. Un gráfico puede ser técnicamente correcto y aun así dar poca información para la explicación que el equipo quiere presentar.

## Conectar la investigación, el diseño y el código

Animo a los equipos a elegir una muestra pequeña que todos puedan usar. Quien investiga puede explicar qué representa un registro. Quienes trabajan en la interfaz pueden ponerse de acuerdo sobre cómo mostrarlo. La persona que presenta puede ensayar con el mismo ejemplo. Compartir una muestra facilita descubrir que el diseño da por sentado un dato que la fuente no ofrece.

Como mentor, busco hacer preguntas que ayuden al equipo a tomar sus propias decisiones. Si una función es demasiado amplia para el tiempo disponible, pregunto qué parte aportaría más a la demo y qué evidencia podrían reunir para mostrar que funciona.

## Ensayar la explicación en voz alta

Un ensayo breve permite detectar vacíos que pasan desapercibidos mientras uno programa. Escucho si se entiende el problema, si hay un ejemplo concreto de lo que hace el prototipo y si queda claro qué sería razonable hacer después. Cuando una pantalla cuesta explicar en voz alta, el equipo ya tiene una pista de qué revisar en la interfaz o en la presentación.`,
    },
  },
  {
    id: '6',
    slug: 'systems-design-frontend',
    image: '/img/blog/covers/systems-design-frontend.webp',
    category: 'Notes',
    date: '2025-01-12',
    featured: false,
    stack: [],
    en: {
      title: 'Why Systems Design Matters for Frontend Engineers',
      excerpt: 'How data ownership, permissions, and network failures shape the interfaces users interact with.',
      content: `A frontend feature often begins as a screen. I find it more useful to follow one action all the way through the system. When a user changes a record, which service accepts the update? Who is allowed to make it? What should the interface show if the response never comes back? Those answers shape what the screen needs to do.

## Identify where each fact comes from

Consider a property CRM with a map and a sales pipeline. The list and map can show the same set of properties in different ways. If they each own a separate copy of the filters, one can show a neighborhood while the other still shows the whole city. A shared filter state gives both views the same criteria and makes it possible to reproduce the result from a URL or a saved search.

An assigned lead is different. The server owns the assignment, and the interface displays the latest version it has. That distinction determines which changes can be made immediately in the browser and which need confirmation.

## Make permissions visible in the interface

In the GFB Inmobiliaria CRM, agents and administrators had different access to prospect records. The interface could show actions appropriate to the current role, while database policies enforced who could read or modify the rows. Both layers matter. The screen tells people which actions they can take. The data layer applies the rule regardless of where the request originated.

Permission errors should also be understandable. If a lead was reassigned while an agent was editing it, the interface needs to preserve the context of the attempted change and explain what the agent can do next. That state deserves attention during design.

## Design for uncertain results

A timeout after a save request is ambiguous. The server might have received and written the update even if the browser missed its response. A useful interface can show that the result is pending, retrieve the latest record, and give the user enough information before they retry. On a telemetry screen, the corresponding question is how old the latest measurement is.

I bring these scenarios into design reviews because they lead to concrete frontend decisions. We can agree on the source of a value, how we signal a failed or pending change, and what information people need to recover. [See the GFB Inmobiliaria CRM case study](/work/real-estate-crm).`,
    },
    es: {
      title: 'Por qué el diseño de sistemas importa en frontend',
      excerpt: 'Cómo el origen de los datos, los permisos y los fallos de red afectan las interfaces que usan las personas.',
      content: `Una función de frontend muchas veces empieza como una pantalla. Me resulta más útil seguir una acción de principio a fin. Cuando una persona cambia un registro, ¿qué servicio acepta la actualización? ¿Quién tiene permiso para hacerla? ¿Qué debe mostrar la interfaz si la respuesta nunca llega? Las respuestas determinan qué tiene que hacer la pantalla.

## Identificar de dónde sale cada dato

Piensa en un CRM inmobiliario con mapa y tablero de ventas. La lista y el mapa pueden mostrar las mismas propiedades de maneras distintas. Si cada vista guarda sus propios filtros, una puede mostrar un sector mientras la otra todavía enseña la ciudad entera. Compartir el estado de los filtros permite usar los mismos criterios en ambas vistas y reproducir el resultado a partir de una URL o una búsqueda guardada.

Un prospecto asignado funciona de otra manera. El servidor registra la asignación y la interfaz muestra la última versión que recibió. Esa diferencia permite decidir qué cambios se pueden reflejar de inmediato en el navegador y cuáles necesitan confirmación.

## Mostrar los permisos en la interfaz

En el CRM de GFB Inmobiliaria, agentes y administradores tenían distintos accesos a los registros de prospectos. La interfaz podía mostrar las acciones adecuadas al rol, mientras las políticas de la base de datos aplicaban las reglas de lectura y edición. La pantalla le indica a la persona qué puede hacer. La base de datos aplica la regla desde cualquier origen de la solicitud.

Los errores de permisos también deben entenderse. Si un prospecto cambia de responsable mientras un agente lo está editando, la interfaz debe conservar el contexto del cambio que intentó hacer y explicar qué puede hacer a continuación. Vale la pena prever ese estado desde el diseño.

## Diseñar para resultados inciertos

Si se agota el tiempo de espera después de pulsar Guardar, el resultado queda en duda. El servidor pudo haber guardado la actualización aunque el navegador nunca recibiera la respuesta. La interfaz puede indicar que el resultado está pendiente, recuperar la versión más reciente y dar suficiente información antes de reintentar. En un panel de telemetría, una duda equivalente es cuánto tiempo ha pasado desde la última medición.

Llevo estas situaciones a las revisiones de diseño porque ayudan a tomar decisiones concretas. Podemos acordar de dónde sale cada dato, cómo señalamos un cambio pendiente o fallido y qué información necesita la persona para continuar. [Consulta el caso del CRM de GFB Inmobiliaria](/es/work/real-estate-crm).`,
    },
  },
  {
    id: '7',
    slug: 'opensource-contributions',
    image: '/img/blog/covers/opensource-contributions.webp',
    category: 'Beyond code',
    date: '2024-12-01',
    featured: false,
    stack: ['React', 'Python', 'TypeScript'],
    en: {
      title: 'Open Source and Repos',
      excerpt: 'What publishing code has taught me about setup instructions, small pull requests, and making a project easier to pick up.',
      content: `Open source changed the way I look at a repository. When the code lives on my own machine, it is easy to forget which setup steps I skipped because I already had a tool installed. Publishing it makes those assumptions easier to spot. Someone should be able to tell what the project does, what it needs, and how to see it working from a fresh checkout.

## Document a first successful run

I prefer a README that takes the reader from installation to a visible result. For a small API, that might be a sample request and the response it should produce. For a frontend, it could be a route to open and the data expected on screen. An environment example can list the names and purpose of settings while the real values stay outside the repository.

Setup instructions are also worth trying from a clean directory. A missing data file or an undocumented command can leave a contributor stuck before they reach the part they wanted to work on. The first run tells me whether the documentation describes the project someone else will actually receive.

## Give each change a reason

When I review a pull request, I want to understand the behavior that prompted it. A short reproduction, the expected result, and the check that passed are often enough to begin. With a small diff, the reviewer can trace the change from the reported problem to the lines that address it. I try to give the same context when I submit a change in a repository someone else maintains.

## Two later examples

In 2025, Floppy gave me an example that crosses firmware, a backend, and a dashboard. For a project like that, a useful handoff identifies which parts require a physical sensor and which can be demonstrated from sample readings. Through Google Summer of Code in 2026, I joined omegaUp as a contributor and turned my attention to code evaluation workflows in an established project with its own conventions. [Read the Floppy case study](/work/floppy). [See one of my pull requests in omegaUp](https://github.com/omegaup/omegaup/pull/9508).

Whether the project is mine or I am joining an existing one, I use the same check. Could someone understand the change and run the relevant part of the system without asking me to reconstruct the steps from memory?`,
    },
    es: {
      title: 'Código abierto y repositorios',
      excerpt: 'Lo que aprendí al publicar código sobre cómo documentar la instalación, enviar cambios pequeños y facilitar que otra persona retome un proyecto.',
      content: `El código abierto cambió mi forma de mirar un repositorio. Cuando el código vive en mi computadora, es fácil olvidar que me salté un paso porque ya tenía instalada una herramienta. Al publicarlo, esas suposiciones salen a la luz. Quien descarga el proyecto debería poder entender qué hace, qué necesita y cómo verlo funcionar desde una copia limpia.

## Documentar una primera ejecución completa

Prefiero un README que lleve a la persona desde la instalación hasta un resultado visible. En una API pequeña, puede ser una solicitud de ejemplo con la respuesta esperada. En una interfaz, puede ser la ruta que hay que abrir y los datos que deberían aparecer. Un archivo de ejemplo puede explicar qué variables de entorno se usan, mientras los valores reales se mantienen fuera del repositorio.

También vale la pena seguir las instrucciones desde una carpeta limpia. Un archivo de datos ausente o un comando que quedó sin documentar puede frenar a alguien antes de llegar a la parte que quería modificar. Esa primera ejecución me dice si la documentación describe el proyecto que realmente recibe el lector.

## Explicar el motivo de cada cambio

Al revisar una solicitud de cambios, quiero entender qué comportamiento la motivó. Un caso breve para reproducirlo, el resultado esperado y la prueba que se ejecutó suelen bastar para empezar. Con un cambio pequeño es más fácil seguir el recorrido desde el problema hasta las líneas que lo resuelven. Procuro dar el mismo contexto cuando propongo algo en un repositorio que mantiene otra persona.

## Dos ejemplos posteriores

En 2025, Floppy me dio un ejemplo que une firmware, backend y una interfaz. Para retomar un proyecto así, conviene saber qué partes requieren un sensor físico y cuáles se pueden demostrar con lecturas de ejemplo. En 2026 me incorporé como contribuidor a omegaUp a través de Google Summer of Code, con trabajo en los flujos de evaluación de código de un proyecto que ya tenía sus propias convenciones. [Lee el caso de estudio de Floppy](/es/work/floppy). [Consulta uno de mis pull requests en omegaUp](https://github.com/omegaup/omegaup/pull/9508).

Tanto si publico un proyecto propio como si me incorporo a uno que ya existe, me hago la misma pregunta. ¿Puede otra persona entender el cambio y ejecutar la parte pertinente del sistema sin que yo tenga que explicarle los pasos de memoria?`,
    },
  },
  {
    id: '8',
    slug: 'dominican-tech-culture',
    image: '/img/blog/covers/dominican-tech-culture.webp',
    category: 'Beyond code',
    date: '2025-01-05',
    featured: false,
    stack: [],
    en: {
      title: 'Dominican History, Culture, and Tech',
      excerpt: 'How growing up in Santo Domingo shapes the problems I choose to work on and the people I want technology to reach.',
      content: `I grew up in Santo Domingo, and that shapes what I notice when I build software. A route on a screen is also a route someone drives every day. A sensor reading can describe a place someone knows well. The history of a neighborhood, the words people use for a location, and what they remember about earlier changes can all affect how they interpret what an app shows.

## Start with a place people recognize

A project like Conducete makes this concrete. A trip score can summarize a route, but the map lets a driver connect an event to an intersection or a stretch of road they recognize. The way people describe a route can also differ from the names in a database. A design conversation becomes more useful when it starts with the places and decisions people actually know.

For a developer, that changes everyday questions. If someone reports a problem, can they find the location in the interface? Does the wording make sense in Spanish as spoken locally? What information can still reach someone who is away from Wi-Fi? These are choices about labels, data, and delivery channels that affect whether the work is usable.

## What representation looks like in practice

I value seeing teams in Santo Domingo work on problems that matter to them and explain those problems in their own terms. The local Space Apps event is one example. Working on a shared science challenge gives people from different disciplines a chance to contribute, whether they are organizing a team, interpreting data, building a prototype, or presenting it. [Santo Domingo’s 2024 Space Apps event](https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/santo-domingo/).

Making that work visible also means leaving behind something others can learn from. A case study can record where the idea came from, what the team had access to, and what it would still need to test. A repository or a demo gives someone else a concrete place to start.

Building in Santo Domingo keeps me attentive to local language, practical constraints, and whose experience informs each design. Those details shape the projects I choose and the decisions I make once I start building.`,
    },
    es: {
      title: 'Historia, cultura y tecnología dominicana',
      excerpt: 'Cómo crecer en Santo Domingo influye en los problemas que elijo y en las personas a las que quiero llegar con la tecnología.',
      content: `Crecí en Santo Domingo y eso influye en lo que observo cuando construyo software. Una ruta en la pantalla también es el trayecto que alguien recorre todos los días. La lectura de un sensor puede describir un lugar que una persona conoce bien. La historia de un sector, los nombres que la gente usa para ubicarlo y el recuerdo de cambios anteriores influyen en cómo se interpreta lo que muestra una aplicación.

## Empezar por un lugar reconocible

Conducete es un ejemplo concreto. Una puntuación puede resumir un trayecto, y el mapa permite relacionar un evento con una intersección o un tramo que el conductor reconoce. La manera de describir una ruta también puede ser distinta de los nombres guardados en una base de datos. La conversación de diseño aporta más cuando empieza por los lugares y las decisiones que la gente conoce de primera mano.

Eso cambia preguntas cotidianas para quien programa. Si alguien reporta un problema, ¿puede ubicarlo en la interfaz? ¿Se entiende el mensaje en el español que se usa aquí? ¿Qué información le puede llegar a una persona que está lejos de una red Wi-Fi? Son decisiones sobre nombres, datos y canales de comunicación que afectan el uso del producto.

## Qué significa la representación en la práctica

Me importa ver equipos de Santo Domingo trabajar en problemas que les interesan y explicarlos en sus propios términos. La sede local de Space Apps es un ejemplo. Un reto científico compartido permite aportar desde disciplinas distintas, ya sea organizando un equipo, interpretando datos, construyendo un prototipo o presentándolo. [Sede de Santo Domingo en Space Apps 2024](https://www.spaceappschallenge.org/nasa-space-apps-2024/2024-local-events/santo-domingo/).

Visibilizar ese trabajo también implica dejar algo de lo que otros puedan aprender. Un caso de estudio puede contar de dónde salió la idea, con qué recursos contaba el equipo y qué le faltaba comprobar. Un repositorio o una demo le da a otra persona un punto concreto desde el que empezar.

Construir desde Santo Domingo me lleva a prestar atención al lenguaje local, a las condiciones de uso y a las experiencias que orientan las decisiones de diseño. Esos detalles influyen tanto en los proyectos que elijo como en las decisiones que tomo al desarrollarlos.`,
    },
  },
];

function localizePosts(lang: Language): Post[] {
  return entries.map(({ en, es, ...post }) => {
    const copy = lang === 'es' ? es : en;
    const wordCount = copy.content.trim().split(/\s+/).length;

    return {
      ...post,
      ...copy,
      lang,
      readingTime: Math.ceil(wordCount / 200),
    };
  });
}

export const postsEN = localizePosts('en');
export const postsES = localizePosts('es');
