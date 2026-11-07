import { CaseStudy } from '@/lib/types';

export const caseStudiesEN: CaseStudy[] = [
  {
    id: '1',
    slug: 'mission-atabey',
    eyebrow: 'Case study',
    title: 'Mission Atabey',
    description: 'A telemetry platform for a Mars-analog mission with real-time crew biometrics and crop monitoring.',
    image: '[ADD screenshot]',
    role: 'Full Stack Developer, Telemetry Lead',
    stack: ['Python', 'FastAPI', 'PostgreSQL', 'React', 'Vite', 'MQTT', 'ESP32', 'LoRa'],
    github: 'https://github.com/mxnueh',
    links: [{ label: 'Learn more', url: 'https://github.com/mxnueh' }],
    lang: 'en',
    content: `## Overview

Mission Atabey was a Dominican Mars-analog mission simulating Martian conditions. The mission included a crop dome, crew quarters, and comprehensive environmental monitoring. My role: build the telemetry system that turned sensor data into actionable intelligence.

## Architecture

The system was built for reliability in low-bandwidth scenarios:

**Hardware**: ESP32 microcontrollers with sensors (temperature, humidity, biometrics), connected via LoRa to a Raspberry Pi gateway.

**Gateway**: The Pi ran offline-first SQLite queues. When internet returned, it synced to the backend.

**Backend**: FastAPI with PostgreSQL. Three-tier permissions: mission control, science leads, and crew. Biometric data was encrypted and only visible to authorized roles.

**Frontend**: React + Vite dashboard with real-time updates, live maps, and threshold-based alerts.

## Key Features

- **Live telemetry**: 30+ sensor streams updated every 10 seconds.
- **Role-based access control**: JWT tokens, row-level security in PostgreSQL.
- **Alerting system**: Thresholds persist across sessions; escalation logic for critical events.
- **Offline resilience**: 72+ hours of queued data capacity on the Pi.

## Challenges and Solutions

**Challenge**: Biometric data is sensitive. The crew needed to trust the system.
**Solution**: End-to-end encryption for biometric streams; only aggregated stats visible to non-medical roles.

**Challenge**: Internet connection was intermittent (simulating Mars conditions).
**Solution**: Offline-first architecture. The Pi always had local data; sync happened opportunistically.

**Challenge**: The dashboard needed to be readable in high-stress situations.
**Solution**: Large, high-contrast typography; critical alerts in red; non-blocking info in gray.

## What I'd improve next

- Add data compression for LoRa bandwidth (currently ~60% overhead).
- Implement predictive alerts (machine learning on biometric trends).
- Build a crew-facing companion app for personal health logs.
- Formalize the sensor calibration workflow to eliminate drift.`,
  },
  {
    id: '2',
    slug: 'conduete',
    eyebrow: 'Case study',
    title: 'CONDÚCETE',
    description: 'A gamified mobile app encouraging safe driving habits among Dominican drivers.',
    image: '[ADD screenshot]',
    role: 'Full Stack Developer, UI/UX Integration',
    stack: ['Flutter', 'Dart', 'Python', 'Flask', 'PostgreSQL', 'Google Maps API'],
    github: 'https://github.com/mxnueh',
    lang: 'en',
    content: `## Overview

Road safety is a critical issue in the Dominican Republic. CONDÚCETE uses gamification to make safe driving habits engaging and rewarding. I worked as Full Stack Developer and UI/UX integrator in a team of four.

## The Problem

Dominican drivers face daily hazards: crowded roads, aggressive traffic, and few incentives for defensive driving. Existing apps were either too punitive (driver license points systems) or too generic (generic driving advice).

## The Solution

CONDÚCETE gamifies safety. Users earn points for smooth acceleration, controlled braking, and safe speeds. Routes are scored in real time. Leaderboards create friendly competition. Badges reward milestones. The app integrates with a backend to persist data and show community stats.

## My Contributions

- **Flutter UI**: Responsive design, real-time map integration, smooth animations.
- **Form validation**: Client-side and server-side validation for registration and trip creation.
- **API integration**: RESTful endpoints for user profiles, trips, leaderboards, and badges.
- **Database design**: PostgreSQL schema for users, trips, scoring algorithms, and community data.

## Key Features

- **Live GPS tracking**: Routes displayed on a map with score overlays.
- **Gamification**: Points, badges, leaderboards, daily challenges.
- **Community**: Compete with friends; anonymized regional stats.
- **Personalization**: Difficulty modes (eco, balanced, sport) adjust scoring sensitivity.

## The Team

- Tech Lead: overall architecture and backend oversight.
- Project Lead: timeline, requirements, stakeholder communication.
- Backend Developer: API design and database optimization.
- Me: Flutter app, form handling, API integration, responsive design.

## What I'd improve next

- Offline mode for rural areas without consistent GPS coverage.
- GPS accuracy improvements (currently ±10m; we need ±5m).
- Predictive alerts before dangerous situations (e.g., "This route has hazards between 5 and 6 PM").
- Integration with insurance companies for premium discounts (privacy-respecting, opt-in).`,
  },
  {
    id: '3',
    slug: 'floppy',
    eyebrow: 'Case study',
    title: 'Floppy',
    description: '4th place at CreaRD hackathon. A flood-monitoring system with real-time alerts.',
    image: '[ADD screenshot]',
    role: 'Full Stack Developer',
    stack: ['ESP32', 'Flask', 'React', 'SQLite', 'SMS API', 'Push Notifications'],
    github: 'https://github.com/mxnueh/floppy',
    lang: 'en',
    content: `## Overview

Floppy is a flood-monitoring prototype that won 4th place at CreaRD hackathon on August 23, 2025. It's designed for communities near rivers and streams in the Dominican Republic, where flooding causes significant damage and loss of life.

## The Problem

Flood warnings often arrive too late or not at all. Communities need real-time water level data so they can evacuate safely or relocate livestock and crops.

## The Solution

Floppy uses cheap, commodity hardware:

- **Sensor**: An ESP32 microcontroller with ultrasonic distance sensors mounted above water surfaces.
- **Backend**: Flask REST API on a Raspberry Pi or cloud server.
- **Alerts**: SMS and push notifications when water levels exceed user-defined thresholds.
- **Dashboard**: A React web interface showing live levels, historical trends, and alert history.

## My Contributions

- **Hardware**: Configured ESP32 boards, calibrated ultrasonic sensors, tested LoRa connectivity.
- **Backend**: Flask API for storing readings, managing thresholds, triggering alerts.
- **Frontend**: React dashboard with real-time updates, map of sensors, alert history.
- **Integration**: SMS via Twilio API, push notifications via Firebase.

## Current Status

This is a partial prototype. The hardware works; the API works; the dashboard works. What's not done: sensors aren't streaming live data yet (currently manually triggered for demo), and the system hasn't been deployed to a real flood-prone area.

## What I'd improve next

- **Sensor network**: Deploy 5-10 sensors across a watershed to build flow prediction models.
- **Machine learning**: Predict flood peaks 24-48 hours in advance.
- **Geofencing**: Automatically alert people (residents, farmers) in low-lying zones based on their location and threat level.
- **Integration with emergency services**: One-click alert to fire departments and civil protection authorities.
- **Open source**: The repo is public; I'd love community contributions for sensor types and use cases.`,
  },
  {
    id: '4',
    slug: 'real-estate-crm',
    eyebrow: 'Case study',
    title: 'Real Estate CRM',
    description: 'A full-stack CRM for property agents, featuring interactive maps and client management.',
    image: '[ADD screenshot]',
    role: 'Full Stack Developer',
    stack: ['React', 'TypeScript', 'Tailwind', 'Supabase', 'PostgreSQL'],
    github: 'https://github.com/mxnueh',
    lang: 'en',
    content: `## Overview

GFB Inmobiliaria needed a CRM to manage client relationships, properties, and sales pipelines. I built a full-stack application using React, TypeScript, and Supabase.

## Features

- **Property listings**: Upload, edit, and organize properties with photos and details.
- **Client management**: Track leads, interactions, and deal status.
- **Interactive maps**: Visualize properties on a map with filtering.
- **Permissions**: Row-level security so agents only see their own clients.
- **Reporting**: Sales pipeline dashboards and agent performance metrics.

## My Work

- **Frontend**: Responsive design, real-time filters, image uploads.
- **Backend**: Supabase (PostgreSQL), RLS policies, automated email notifications.
- **Deployment**: Vercel for fast iteration and automatic deployments on push.

## What I'd improve next

- Add CRM integrations (WhatsApp, email, calendar sync).
- Implement property value predictions based on market data.
- Build a mobile app for agents on the go.`,
  },
  {
    id: '5',
    slug: 'marco-seguro',
    eyebrow: 'Case study',
    title: 'Marco Seguro',
    description: 'A carpentry e-commerce site with a custom PVC tile quoter.',
    image: '[ADD screenshot]',
    role: 'Frontend Developer',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    github: 'https://github.com/mxnueh',
    lang: 'en',
    content: `## Overview

Marco Seguro is a carpentry business selling custom roofing and wall installations. The client needed a website where users could:

1. Browse products.
2. Configure custom PVC tile layouts (size, color, quantity).
3. Get instant price quotes.
4. Contact the business for installation.

## Features

- **Product catalog**: Materials, finishes, and installation options.
- **Tile configurator**: A UI where users assemble a custom layout and see the price update in real time.
- **Responsive design**: Works on desktop (for detailed planning) and mobile (for browsing).
- **Contact forms**: Direct messaging to the business for custom requests.

## My Work

- **Configurator logic**: State management for tile selection, price calculation, and layout visualization.
- **Responsive design**: Desktop layout for detailed work; simplified mobile layout.
- **Performance**: Optimized images and lazy loading for large product photos.

## What I'd improve next

- Add payment processing for deposit collection.
- Implement project gallery (before/after photos of installations).
- Integration with Google Maps for site visits.`,
  },
  {
    id: '6',
    slug: 'nasa-herc',
    eyebrow: 'Case study',
    title: 'NASA HERC with AstroBosco',
    description: 'Managed telemetry for a competition rover at NASA Human Exploration Rover Challenge.',
    image: '[ADD screenshot]',
    role: 'Telemetry Lead',
    stack: ['Python', 'C++', 'Embedded Systems', 'Serial Communication'],
    github: 'https://github.com/mxnueh',
    lang: 'en',
    content: `## Overview

NASA HERC (Human Exploration Rover Challenge) is a competition where student teams design and build Mars-analog rovers. AstroBosco was a Dominican team competing in the 2024-2025 season. I managed the telemetry department.

## The Rover

Our rover was equipped with:

- **Motors**: Drive, steering, and arm motors.
- **Sensors**: LiDAR, cameras, laser pointers for laser ranging.
- **Payload**: A sampling arm with servo-controlled gripper.

## My Role

As Telemetry Lead, I:

- **Programmed the rover**: C++ code running on an Arduino board to read sensors, command motors, and stream telemetry.
- **Data collection**: Implemented serial communication to extract raw data from sensors during testing and competition.
- **Interface design**: Built a dashboard to visualize rover status, sensor readings, and battery levels.
- **Reliability**: Ensured systems survived extreme conditions (heat, dust, vibration).

## Challenges

- **Time pressure**: 6 months from kickoff to competition. Every system had to work first time.
- **Power budget**: Limited battery capacity meant efficient code was critical.
- **Ruggedness**: Sensors needed to survive rough terrain and extreme temperatures.

## What I learned

- Embedded systems require discipline: every line of code counts.
- Testing in the field (on dirt, not in the lab) reveals real problems.
- Collaboration between mechanical and electrical teams makes or breaks the rover.

## What I'd improve next

- Autonomous navigation (computer vision + wheel odometry).
- Real-time health monitoring and predictive maintenance alerts.
- Log data to the rover's internal storage (for post-mission analysis without radio link).`,
  },
];

export const caseStudiesES: CaseStudy[] = caseStudiesEN.map(study => ({
  ...study,
  lang: 'es',
  // Spanish translations would go here - for now using English
  // This is a placeholder; full Spanish translations should be provided
}));
