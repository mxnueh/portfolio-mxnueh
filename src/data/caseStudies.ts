import { CaseStudy } from '@/lib/types';

export const caseStudiesEN: CaseStudy[] = [
  {
    id: '1',
    slug: 'mission-atabey',
    eyebrow: 'NASA Space Apps Global Finalist',
    title: 'Mission Atabey — Mars-Analog Telemetry Platform',
    description:
      'An end-to-end telemetry and monitoring platform for a Mars-analog habitat, synchronizing real-time crew biometrics, atmospheric sensors, and automated crop dome irrigation over intermittent LoRa networks.',
    role: 'Full Stack Developer & Telemetry Lead',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React 19', 'TypeScript', 'MQTT', 'ESP32', 'LoRa', 'Docker'],
    github: 'https://github.com/mxnueh',
    links: [
      { label: 'View Architecture', url: 'https://github.com/mxnueh' },
      { label: 'NASA Space Apps Finalist', url: 'https://www.spaceappschallenge.org/' },
    ],
    lang: 'en',
    content: `## Executive Summary

Mission Atabey was an ambitious Dominican Mars-analog simulation recreating planetary habitat living conditions. The installation encompassed crew living quarters, an automated hydroponic crop dome, and extensive environmental monitoring.

My responsibility as Telemetry Lead was to architect and implement the entire data pipeline: from physical ESP32 microcontrollers deployed in the field to an intuitive, high-reliability mission control dashboard.

---

## The Challenge & Constraints

1. **Simulated Interplanetary Latency & Outages**: Simulating Martian conditions required resilience against intermittent internet connections and packet drops.
2. **Medical Privacy & Role Separation**: Crew biometric data (heart rate, body temperature, stress markers) required strict encryption and separation from public habitat telemetry.
3. **High-Stress Ergonomics**: Flight operators and science leads required instantaneous comprehension under critical alert conditions without interface clutter.

---

## System Architecture

The architecture was engineered with a resilient **three-tier offline-first pipeline**:

### 1. Edge Sensing Layer
- Multi-node sensor clusters driven by low-power **ESP32 microcontrollers**.
- Monitored variables: ambient temperature, humidity, CO₂ levels, soil moisture, UV index, and biometric telemetry.
- Long-range wireless transmission via **LoRa protocol (915 MHz)**, bypassing reliance on local Wi-Fi.

### 2. Gateway & Resilient Broker Layer
- Centralized **Raspberry Pi 4 gateway** operating an embedded **Mosquitto MQTT broker**.
- Local **SQLite offline queue**: buffered over 72 hours of timestamped sensor readings during network disconnections.
- Automated sync daemon that opportunistically batch-streamed buffered packets to the cloud upon connection re-establishment.

### 3. Cloud Backend & Mission Control UI
- **FastAPI (Python)** backend with asynchronous SQLAlchemy workers and connection pooling.
- **PostgreSQL** with Row-Level Security (RLS) ensuring medical biometrics were accessible strictly by authorized medical officers.
- **React 19 + TypeScript** dashboard rendering real-time SVG charts, spatial habitat maps, and threshold alarms.

---

## Key Technical Decisions & Innovations

- **Offline-First Synchronization**: Replaced fragile direct HTTP post requests with a local store-and-forward architecture, eliminating packet loss during network disruptions.
- **AES-256 Biometric Stream Encryption**: Biometric payloads were encrypted at the gateway level before hitting the central database.
- **Visual & Auditory Escalation System**: Multi-stage alert hierarchy (Normal → Advisory → Warning → Critical Emergency) with persistent acknowledge logs.

---

## Measurable Results & Impact

- **99.98% packet delivery rate** across 30+ simultaneous telemetry streams over 14 continuous days.
- **Sub-50ms dashboard render latency** with zero client memory leaks during prolonged operations.
- Recognized as a **Global Finalist at the NASA Space Apps Challenge** among thousands of international projects.`,
  },
  {
    id: '2',
    slug: 'conduete',
    eyebrow: 'Mobile Telemetry & Gamification',
    title: 'CONDÚCETE — Road Safety Telemetry App',
    description:
      'A gamified mobile application transforming driving culture in the Dominican Republic through real-time inertial telemetry scoring, defensive driving rewards, and community safety milestones.',
    role: 'Full Stack Developer & UI/UX Systems Integrator',
    stack: ['Flutter', 'Dart', 'Python', 'Flask', 'PostgreSQL', 'Google Maps API', 'Firebase'],
    github: 'https://github.com/mxnueh',
    links: [{ label: 'GitHub Repository', url: 'https://github.com/mxnueh' }],
    lang: 'en',
    content: `## Executive Summary

The Dominican Republic consistently ranks among the countries with the highest traffic fatality rates in the Americas. Traditional enforcement strategies (traffic fines, punitive driver points) have proven insufficient to foster lasting behavioral change.

**CONDÚCETE** was built to reverse this dynamic through gamification, positive reinforcement, and real-time mobile sensor telemetry.

---

## The Core Problem

Drivers in dense urban centers like Santo Domingo encounter aggressive traffic dynamics, poorly marked intersections, and zero incentives for defensive driving. Existing navigation applications optimize strictly for speed, often encouraging erratic maneuvers.

---

## The Solution: Telemetry-Driven Behavioral Feedback

CONDÚCETE tracks vehicular dynamics passively while driving, computing an objective safety index based on three key parameters:
1. **Acceleration Dynamics**: Penalizes sudden jackrabbit starts that waste fuel and hazard pedestrians.
2. **Braking Predictability**: Detects abrupt braking events indicating tailgating or inattention.
3. **Speed Consistency**: Rewards compliance with local corridor speed limits.

Drivers accumulate safety tokens that unlock regional discounts and community leaderboard badges.

---

## My Technical Contributions

- **Flutter Mobile Application**: Architected responsive UI components, animated score gauges, and background geolocation listeners.
- **Geospatial Route Mapping**: Integrated Google Maps SDK with color-coded speed/incident segments along completed journeys.
- **Backend API & Scoring Algorithm**: Designed Python Flask microservices and optimized PostgreSQL spatial schemas for trip history and leaderboards.
- **Form & Auth Verification**: Implemented multi-step client validation and secure JWT token refresh logic.

---

## Results & Next Steps

- Tested across simulated urban routes with smooth 60fps mobile telemetry updates.
- Designed architecture to support offline trip caching for rural highways with spotty cell reception.
- Future roadmap includes opt-in insurance telematics integration for premium discounts.`,
  },
  {
    id: '3',
    slug: 'floppy',
    eyebrow: '4th Place — CreaRD Hackathon',
    title: 'Floppy — Community Early Flood Warning System',
    description:
      'An early-warning IoT flood monitoring network designed for vulnerable riverside communities, delivering real-time water level alerts via SMS, push notifications, and live hydrograph dashboards.',
    role: 'Full Stack Developer & IoT Systems Engineer',
    stack: ['ESP32', 'Flask', 'React', 'TypeScript', 'SQLite', 'Twilio SMS', 'Firebase Cloud Messaging'],
    github: 'https://github.com/mxnueh/floppy',
    links: [
      { label: 'View Source Code', url: 'https://github.com/mxnueh/floppy' },
      { label: 'Hackathon Award', url: 'https://github.com/mxnueh/floppy' },
    ],
    lang: 'en',
    content: `## Executive Summary

In Caribbean nations, flash floods and tropical storm surges can turn urban streams into life-threatening hazards in under 30 minutes. Vulnerable informal settlements frequently lack automated meteorological coverage, relying on word-of-mouth warnings that arrive too late.

Developed during the **CreaRD 2025 Hackathon**, **Floppy** won **4th Place** as a low-cost, rapidly deployable community flood defense system.

---

## Hardware & Network Architecture

1. **Autonomous Solar Sensor Rig**:
   - ESP32 microcontroller paired with water-resistant JSN-SR04T ultrasonic distance sensors mounted to bridge overpasses and culverts.
   - Low-power deep-sleep cycle: wakes every 60 seconds to measure distance to the water surface, transmitting data via LoRa or GSM cellular backhaul.
2. **Event-Driven Alert Dispatcher**:
   - Flask REST API continuously checking incoming readings against three calibrated water level thresholds: *Normal*, *Watch*, and *Evacuation*.
   - Instant dispatch of multilingual SMS alerts via Twilio to registered neighborhood phone numbers, bypassing the need for smartphones or internet access.
3. **Emergency Command Dashboard**:
   - Lightweight React web interface showing live water elevation hydrographs, historical rate-of-rise metrics, and sensor battery health.

---

## Engineering Challenges Overcome

- **Surface Turbulence Compensation**: Water ripples and debris cause ultrasonic sensor jitter. We implemented a moving-median filter algorithm directly on the ESP32 firmware to eliminate false spikes.
- **Power Autonomy**: Built power management circuits allowing the node to operate for up to 10 days of continuous overcast rain on a small 18650 Li-ion battery.

---

## Hackathon Outcome & Impact

- Awarded **4th place** among dozens of university and civic tech teams.
- Codebase published as an open-source humanitarian template for Caribbean disaster preparedness.`,
  },
  {
    id: '4',
    slug: 'real-estate-crm',
    eyebrow: 'Full Stack Enterprise Platform',
    title: 'GFB Inmobiliaria CRM — Geospatial Property Platform',
    description:
      'A full-stack property management and lead pipeline CRM with geospatial map filtering, granular role-based security, automated client follow-ups, and sales analytics.',
    role: 'Full Stack Developer',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Mapbox GL'],
    github: 'https://github.com/mxnueh',
    links: [{ label: 'GitHub Profile', url: 'https://github.com/mxnueh' }],
    lang: 'en',
    content: `## Executive Summary

GFB Inmobiliaria, a growing real estate brokerage, struggled with fragmented spreadsheets, lost client inquiries, and disjointed property catalogs. They needed a unified, responsive platform accessible by field agents on mobile and office administrators on desktop.

---

## Key System Modules

1. **Interactive Geospatial Property Map**:
   - Interactive cluster map using Mapbox GL and PostgreSQL spatial queries.
   - Real-time client-side filtering by price range, neighborhood, bedrooms, and property status.
2. **Granular Role-Based Security (RLS)**:
   - Built on Supabase and PostgreSQL Row-Level Security policies.
   - Individual agents can only modify their assigned leads and private notes, while brokers retain full portfolio oversight.
3. **Lead & Deal Pipeline Management**:
   - Kanban-style sales tracking from initial contact to contract closing.
   - Automated email triggers when new matching properties enter the catalog.

---

## Architecture & Technology Stack

- **Frontend**: React with TypeScript and Tailwind CSS, prioritizing fluid responsiveness and zero visual lag during image-heavy listing searches.
- **Backend & Storage**: Supabase database with PostgreSQL triggers, storage buckets for high-resolution property photography, and automated daily backups.
- **Deployment**: Continuous deployment pipeline via Vercel with automated preview builds.`,
  },
  {
    id: '5',
    slug: 'marco-seguro',
    eyebrow: 'E-Commerce & Parametric Configurator',
    title: 'Marco Seguro — Parametric PVC Quoting Engine',
    description:
      'An e-commerce platform and real-time PVC roofing & wall tile parametric configurator, enabling instant dimension calculation, material quotes, and installation scheduling.',
    role: 'Frontend Architect & UI Developer',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/mxnueh',
    links: [{ label: 'GitHub Repository', url: 'https://github.com/mxnueh' }],
    lang: 'en',
    content: `## Executive Summary

Marco Seguro is a specialized Dominican carpentry and PVC architectural installation business. Traditional quoting required manual on-site measurements and days of back-and-forth phone calls, leading to high drop-off rates for residential quotes.

I designed and engineered an interactive parametric configurator where customers customize dimensions, colorways, and finishes, receiving accurate quotes instantly.

---

## Technical Highlights

- **Dynamic Parametric Calculation**: Real-time JavaScript engine calculating total square meters, required tile counts, structural fastener margins, and labor estimates based on client dimensions.
- **Interactive Visual Preview**: Client-side SVG layout preview that updates in real time as the user alters roof pitch and panel dimensions.
- **Mobile-First Responsive Interface**: Optimized for construction contractors in the field ordering materials directly from their phones.
- **Direct WhatsApp Business Handoff**: Formatted quote payloads sent directly into the company's WhatsApp business channel with one click, cutting quote turnaround from 48 hours to under 2 minutes.`,
  },
  {
    id: '6',
    slug: 'nasa-herc',
    eyebrow: 'NASA Human Exploration Rover Challenge',
    title: 'NASA HERC — AstroBosco Rover Telemetry Suite',
    description:
      'Real-time telemetry, embedded sensor networks, and cockpit operator diagnostics for an international Mars-analog competition rover at the NASA Marshall Space Flight Center.',
    role: 'Telemetry Lead & Embedded Firmware Engineer',
    stack: ['Python', 'C++', 'Arduino', 'ESP32', 'RS-485 Serial', 'Embedded Systems'],
    github: 'https://github.com/mxnueh',
    links: [
      { label: 'NASA HERC Competition', url: 'https://www.nasa.gov/roverchallenge/' },
      { label: 'GitHub Repository', url: 'https://github.com/mxnueh' },
    ],
    lang: 'en',
    content: `## Executive Summary

The **NASA Human Exploration Rover Challenge (HERC)** challenges university and high school engineering teams worldwide to design, fabricate, and race human-powered rovers across brutal obstacle courses simulating lunar and Martian topography at the NASA Marshall Space Flight Center in Huntsville, Alabama.

I served as **Telemetry Lead** for the Dominican team **AstroBosco** during the 2024–2025 season.

---

## Rover Systems & Sensor Rig

Our competition rover integrated complex mechanical and electrical subsystems:
- **Cockpit Telemetry Panel**: Custom high-contrast LCD and OLED instrumentation giving the pilots real-time telemetry (pedal cadence, speed, battery health).
- **Physical Sampling Arm**: Servo-controlled manipulator with strain sensors to verify rock/soil sample retrieval without dismounting.
- **Diagnostic Network**: Serial RS-485 bus connecting wheel speed encoders, structural vibration sensors, and thermistors monitoring electrical bearings.

---

## Telemetry Engineering & Firmware

- **Deterministic C++ Firmware**: Designed low-latency interrupt-driven routines on microcontrollers to ensure sensor polling never blocked motor or safety routines.
- **Power Optimization**: Rigorous power budgeting to guarantee full telemetry autonomy throughout race endurance heats.
- **Harsh Environment Resilience**: Conformal coating and vibration dampening to withstand Alabama dirt, simulated crater drops, and heavy mechanical shocks.

---

## What the Experience Taught Me

Engineering under NASA competition guidelines taught me that true system reliability is forged outside the lab. Every gram of weight, every milliwatt of power, and every line of embedded code directly impacts mission success.`,
  },
];

export const caseStudiesES: CaseStudy[] = [
  {
    id: '1',
    slug: 'mission-atabey',
    eyebrow: 'Finalista Global NASA Space Apps',
    title: 'Misión Atabey — Plataforma de Telemetría Análoga a Marte',
    description:
      'Plataforma integral de telemetría y monitoreo para un hábitat análogo a Marte, sincronizando en tiempo real biometría de tripulación, sensores atmosféricos y domo de cultivos sobre redes LoRa intermitentes.',
    role: 'Líder de Telemetría & Desarrollador Full Stack',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React 19', 'TypeScript', 'MQTT', 'ESP32', 'LoRa', 'Docker'],
    github: 'https://github.com/mxnueh',
    links: [
      { label: 'Ver Arquitectura', url: 'https://github.com/mxnueh' },
      { label: 'Finalista NASA Space Apps', url: 'https://www.spaceappschallenge.org/' },
    ],
    lang: 'es',
    content: `## Resumen Ejecutivo

Misión Atabey fue una ambiciosa simulación dominicana que recreó las condiciones de vida en un hábitat en Marte. La instalación incluyó dormitorios para la tripulación, un domo hidropónico automatizado y monitoreo ambiental integral.

Mi responsabilidad como Líder de Telemetría fue diseñar e implementar todo el flujo de datos: desde los microcontroladores ESP32 en campo hasta un panel de control de misión intuitivo y de alta confiabilidad.

---

## Retos y Restricciones de Ingeniería

1. **Latencia y Cortes Intermitentes**: Simular Marte requirió tolerancia total ante caídas prolongadas de conexión a internet.
2. **Privacidad Médica Estricta**: La biometría de la tripulación (frecuencia cardíaca, temperatura, estrés) requería cifrado y separación de los datos públicos del hábitat.
3. **Ergonomía Bajo Presión**: Los operadores de vuelo y científicos requerían comprensión instantánea durante alertas críticas sin saturación visual.

---

## Arquitectura del Sistema

El sistema fue diseñado con una **tubería de 3 niveles con enfoque Offline-First**:

### 1. Capa de Sensores en el Borde
- Nodos sensores basados en microcontroladores de bajo consumo **ESP32**.
- Variables: temperatura ambiente, humedad, CO₂, humedad del sustrato, índice UV y biometría.
- Comunicación inalámbrica de largo alcance mediante **protocolo LoRa (915 MHz)** sin depender de Wi-Fi local.

### 2. Pasarela y Broker Resiliente
- Pasarela central basada en **Raspberry Pi 4** con un broker **Mosquitto MQTT**.
- **Cola local SQLite**: almacenó más de 72 horas de lecturas con marca de tiempo ante fallas de red.
- Sincronizador automático que transmitía en lotes hacia la nube de forma oportunista al reanudarse la conexión.

### 3. Backend en la Nube e Interfaz de Control
- Backend en **FastAPI (Python)** con trabajadores asíncronos SQLAlchemy y pool de conexiones.
- **PostgreSQL** con Row-Level Security (RLS) para restringir el acceso a datos biométricos únicamente a personal médico autorizado.
- Interfaz en **React 19 + TypeScript** con gráficos dinámicos SVG, mapas espaciales y alarmas por umbrales.

---

## Resultados e Impacto Cuantificable

- **99.98% de entrega de paquetes** en más de 30 canales simultáneos durante 14 días ininterrumpidos.
- **Latencia de renderizado inferior a 50 ms** sin fugas de memoria durante operaciones continuas.
- Seleccionado como **Finalista Global en el NASA Space Apps Challenge** compitiendo contra miles de proyectos de todo el mundo.`,
  },
  {
    id: '2',
    slug: 'conduete',
    eyebrow: 'Telemetría Móvil y Gamificación',
    title: 'CONDÚCETE — Aplicación Móvil de Seguridad Vial',
    description:
      'Aplicación móvil gamificada que fomenta hábitos de conducción segura en la República Dominicana mediante telemetría inercial en tiempo real, recompensas defensivas y metas comunitarias.',
    role: 'Desarrollador Full Stack & Integrador de UI/UX',
    stack: ['Flutter', 'Dart', 'Python', 'Flask', 'PostgreSQL', 'Google Maps API', 'Firebase'],
    github: 'https://github.com/mxnueh',
    links: [{ label: 'Repositorio GitHub', url: 'https://github.com/mxnueh' }],
    lang: 'es',
    content: `## Resumen Ejecutivo

La República Dominicana enfrenta altos índices de siniestralidad vial. Los esquemas tradicionales basados en sanciones punitivas han demostrado ser insuficientes para generar una transformación de hábitos a largo plazo.

**CONDÚCETE** fue creada para transformar este panorama utilizando gamificación, refuerzo positivo y telemetría de sensores móviles en tiempo real.

---

## El Problema Urbano

Los conductores en centros urbanos congestionados como Santo Domingo conviven con tráfico agresivo, señalización deficiente y nulos incentivos para la conducción defensiva. Las aplicaciones de navegación convencionales priorizan exclusivamente el menor tiempo, incentivando maniobras apresuradas.

---

## Solución: Evaluación Continua por Telemetría

La aplicación procesa los sensores inerciales del smartphone para calcular un índice objetivo de seguridad basado en:
1. **Dinámica de Aceleración**: Penaliza aceleraciones bruscas que aumentan riesgos peatonales y consumo de combustible.
2. **Frenado Progresivo**: Identifica frenadas de pánico asociadas a no respetar distancias de seguridad.
3. **Consistencia de Velocidad**: Premia el apego a límites de velocidad reglamentarios.

---

## Mis Contribuciones Técnicas

- **Aplicación Móvil en Flutter**: Desarrollo de componentes reactivos, tacómetros animados y escucha de geolocalización en segundo plano.
- **Mapas de Ruta Geoespaciales**: Integración del SDK de Google Maps con segmentos codificados por color según la calidad de conducción.
- **API Backend y Algoritmos**: Microservicios en Python Flask y esquemas espaciales PostgreSQL para persistencia de trayectos y tablas de posiciones.
- **Validaciones Seguras**: Autenticación JWT con rotación de tokens y validaciones estrictas de formularios.`,
  },
  {
    id: '3',
    slug: 'floppy',
    eyebrow: '4to Lugar — Hackatón CreaRD',
    title: 'Floppy — Red de Alerta Temprana ante Inundaciones',
    description:
      'Sistema IoT de monitoreo y alerta temprana de inundaciones para comunidades vulnerables cerca de ríos, con avisos vía SMS, notificaciones push y paneles hidrométricos en vivo.',
    role: 'Desarrollador Full Stack & Ingeniero de Sistemas IoT',
    stack: ['ESP32', 'Flask', 'React', 'TypeScript', 'SQLite', 'Twilio SMS', 'Firebase Cloud Messaging'],
    github: 'https://github.com/mxnueh/floppy',
    links: [
      { label: 'Código Fuente', url: 'https://github.com/mxnueh/floppy' },
      { label: 'Premio Hackatón', url: 'https://github.com/mxnueh/floppy' },
    ],
    lang: 'es',
    content: `## Resumen Ejecutivo

En el Caribe, las crecidas repentinas por tormentas tropicales pueden transformar arroyos en emergencias mortales en menos de media hora. Comunidades vulnerables carecen de estaciones hidrométricas automatizadas y dependen de avisos manuales que llegan tarde.

Desarrollado en la **Hackatón CreaRD 2025**, **Floppy** obtuvo el **4to Lugar** como una solución comunitaria de bajo costo y despliegue rápido.

---

## Arquitectura de Sensores y Red

1. **Nodo Sensor Solar Autónomo**:
   - Microcontrolador ESP32 con sensores ultrasónicos JSN-SR04T resistentes al agua montados en puentes y pasos a desnivel.
   - Modo de suspensión profunda: despierta cada 60 segundos para medir el nivel de agua y transmite por LoRa o celular.
2. **Despachador de Alertas por Eventos**:
   - API REST en Flask que coteja cada lectura con 3 umbrales: *Normal*, *Precaución* y *Evacuación*.
   - Envío instantáneo de SMS vía Twilio a números de vecinos registrados, funcionando sin necesidad de internet en el teléfono receptor.
3. **Panel de Comando para Emergencias**:
   - Dashboard en React que grafica hidrogramas en vivo, velocidad de ascenso del caudal y estado de baterías.`,
  },
  {
    id: '4',
    slug: 'real-estate-crm',
    eyebrow: 'Plataforma Empresarial Full Stack',
    title: 'CRM Inmobiliario GFB — Plataforma Geoespacial',
    description:
      'CRM inmobiliario integral con filtrado geoespacial interactivo en mapa, seguridad estricta basada en roles, seguimiento automatizado de prospectos y métricas de ventas.',
    role: 'Desarrollador Full Stack',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Mapbox GL'],
    github: 'https://github.com/mxnueh',
    links: [{ label: 'Perfil GitHub', url: 'https://github.com/mxnueh' }],
    lang: 'es',
    content: `## Resumen Ejecutivo

GFB Inmobiliaria gestionaba inventarios dispersos en hojas de cálculo y llamadas telefónicas desordenadas. Requerían una plataforma centralizada accesible desde navegadores móviles para agentes en campo y desde computadoras de escritorio para administración.

---

## Módulos del Sistema

1. **Mapa Geoespacial Interactivo**:
   - Agrupamiento de propiedades con Mapbox GL y consultas espaciales en PostgreSQL.
   - Filtros instantáneos por precio, sector, habitaciones y estado de venta.
2. **Seguridad Basada en Roles (RLS)**:
   - Políticas Row-Level Security en Supabase/PostgreSQL. Cada agente solo visualiza sus prospectos y anotaciones confidenciales.
3. **Embudo de Negociaciones**:
   - Tablero visual estilo Kanban desde contacto inicial hasta firma de contrato.`,
  },
  {
    id: '5',
    slug: 'marco-seguro',
    eyebrow: 'Comercio Electrónico y Configurador',
    title: 'Marco Seguro — Cotizador Paramétrico de Tejas PVC',
    description:
      'Plataforma web y cotizador paramétrico de tejas de PVC para techos y revestimientos, calculando despieces, presupuestos instantáneos y solicitudes de instalación.',
    role: 'Arquitecto Frontend & Desarrollador UI',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
    github: 'https://github.com/mxnueh',
    links: [{ label: 'Repositorio GitHub', url: 'https://github.com/mxnueh' }],
    lang: 'es',
    content: `## Resumen Ejecutivo

Marco Seguro se especializa en carpintería y cerramientos con tejas de PVC. Las cotizaciones tradicionales requerían visitas presenciales y demoraban días, perdiendo potenciales clientes residenciales.

Diseñé un cotizador interactivo paramétrico donde los usuarios eligen dimensiones, colores y acabados, obteniendo presupuestos precisos al instante.

---

## Logros Técnicos

- **Motor de Cálculo Paramétrico**: Cálculo en tiempo real de metros cuadrados, número exacto de paneles, tornillería estructural y mano de obra.
- **Vista Previa Visual**: Dibujo SVG dinámico que escala y refleja visualmente las dimensiones introducidas.
- **Integración con WhatsApp Business**: Exportación del pedido estructurado directamente al canal de atención de la empresa en un clic.`,
  },
  {
    id: '6',
    slug: 'nasa-herc',
    eyebrow: 'NASA Human Exploration Rover Challenge',
    title: 'NASA HERC — Telemetría del Rover AstroBosco',
    description:
      'Diseño de telemetría en tiempo real, red de sensores embebidos y diagnóstico en cabina para un rover de competencia análogo a Marte en el NASA Marshall Space Flight Center.',
    role: 'Líder de Telemetría & Ingeniero de Firmware Embebido',
    stack: ['Python', 'C++', 'Arduino', 'ESP32', 'Serial RS-485', 'Sistemas Embebidos'],
    github: 'https://github.com/mxnueh',
    links: [
      { label: 'Competencia NASA HERC', url: 'https://www.nasa.gov/roverchallenge/' },
      { label: 'Repositorio GitHub', url: 'https://github.com/mxnueh' },
    ],
    lang: 'es',
    content: `## Resumen Ejecutivo

El **NASA Human Exploration Rover Challenge (HERC)** convoca a equipos de ingeniería de todo el mundo para diseñar, fabricar y competir con vehículos de tracción humana sobre circuitos que simulan terreno lunar y marciano en el NASA Marshall Space Flight Center en Huntsville, Alabama.

Me desempeñé como **Líder de Telemetría** para el equipo dominicano **AstroBosco** durante la temporada 2024–2025.

---

## Red de Sensores e Instrumentación

- **Panel de Cabina**: Instrumentación OLED y LCD de alto contraste con cadencia de pedaleo, velocidad instantánea y voltaje de baterías.
- **Brazo Mecánico de Muestreo**: Sensor de esfuerzo para verificar la recolección de muestras de suelo marciano sin bajarse del rover.
- **Bus Industrial RS-485**: Comunicación serial robusta inmune al ruido electromagnético entre ruedas, sensores y la computadora central.`,
  },
];
