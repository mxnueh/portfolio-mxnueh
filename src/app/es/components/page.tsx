'use client';

import React, { useRef, useState } from 'react';
import { GlobalNav } from '@/components/GlobalNav';
import { SiteFooter } from '@/components/SiteFooter';

// MagicUI
import {
  Marquee,
  Terminal,
  BentoGrid,
  BentoCard,
  OrbitingCircles,
  Dock,
  DockIcon,
  AnimatedBeam,
  BorderBeam,
  MagicCard,
  Meteors,
  useConfetti,
  NumberTicker,
  TypingAnimation,
  AnimatedGradientText,
  SparklesText,
  HyperText,
  WordRotate,
  ShimmerButton,
  RainbowButton,
  InteractiveHoverButton,
  RippleButton,
  DotPattern,
  RetroGrid,
  FlickeringGrid,
} from '@/components/magicui';

// ReactBits
import {
  DecryptedText,
  BlurText,
  GlitchText,
  ShinyText,
  TrueFocus,
  CountUp,
  GradientASCII,
  Particles,
  ShapeWaves,
  ClickSpark,
  Magnet,
  SpotlightCard,
  StarBorder,
  Hyperspeed,
} from '@/components/reactbits';

import {
  Code,
  Terminal as TerminalIcon,
  Cpu,
  Layers,
  Sparkles,
  Zap,
  Globe,
  Database,
  Rocket,
  Mail,
  Flame,
  CheckCircle,
} from 'lucide-react';

function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export default function EsComponentsShowcasePage() {
  const { fire: fireConfetti } = useConfetti();
  const [activeTab, setActiveTab] = useState<'all' | 'magicui' | 'reactbits'>('all');

  const beamContainerRef = useRef<HTMLDivElement>(null);
  const beamFromRef = useRef<HTMLDivElement>(null);
  const beamToRef = useRef<HTMLDivElement>(null);

  return (
    <ClickSpark sparkColor="#0071e3">
      <div className="flex flex-col min-h-screen bg-white dark:bg-[#0c0c0e] text-text-primary dark:text-white transition-colors">
        <GlobalNav lang="es" />

        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16 px-6 text-center border-b border-black/5 dark:border-white/10">
          <DotPattern className="opacity-40" />
          <div className="relative z-10 max-w-4xl mx-auto">
            <AnimatedGradientText className="mb-6">
              ✨ Suite de Componentes ReactBits & MagicUI
            </AnimatedGradientText>

            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Componentes Interactivos & <SparklesText text="Animaciones de Texto" />
            </h1>

            <p className="text-lg md:text-xl text-text-secondary dark:text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
              Colección completa de animaciones tipográficas, tarjetas 3D interactivas,
              lienzos en tiempo real, botones dinámicos y efectos visuales atmosféricos.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <ShimmerButton
                onClick={() => fireConfetti()}
                background="#0071e3"
                className="font-medium"
              >
                <Sparkles className="w-4 h-4 mr-1" />
                Lanzar Confeti de Celebración
              </ShimmerButton>

              <div className="inline-flex rounded-full p-1 bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10">
                {(['all', 'magicui', 'reactbits'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 ${
                      activeTab === tab
                        ? 'bg-white dark:bg-zinc-800 text-accent-fill shadow-sm'
                        : 'text-text-secondary dark:text-gray-400 hover:text-text-primary'
                    }`}
                  >
                    {tab === 'all' ? 'Todos (38+)' : tab === 'magicui' ? 'Magic UI' : 'ReactBits'}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 1: ANIMACIONES DE TEXTO */}
        {(activeTab === 'all' || activeTab === 'reactbits' || activeTab === 'magicui') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Tipografía y Revelación
              </span>
              <h2 className="text-3xl font-bold mt-1">Animaciones de Texto</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Pasa el cursor o visualiza cada elemento para probar la tipografía reactiva.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Decrypted Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / DecryptedText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-semibold">Pasa el cursor</span>
                </div>
                <div className="text-xl font-bold">
                  <DecryptedText
                    text="TELEMETRÍA CIBERNÉTICA"
                    animateOn="hover"
                    speed={40}
                    className="text-accent-fill font-mono"
                  />
                </div>
                <p className="text-xs text-text-secondary mt-3">Descifra caracteres aleatorios hasta revelar el texto final.</p>
              </div>

              {/* True Focus */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / TrueFocus</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-500 font-semibold">Enfoque Óptico</span>
                </div>
                <TrueFocus
                  sentence="Sistemas Telemetría Arquitectura FullStack"
                  manualMode={false}
                  borderColor="#0071e3"
                  className="text-base"
                />
                <p className="text-xs text-text-secondary mt-3">Marco visor interactivo que enfoca y se desliza entre palabras.</p>
              </div>

              {/* Hyper Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / HyperText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-purple-500/10 text-purple-500 font-semibold">Pasa el cursor</span>
                </div>
                <div className="text-2xl font-mono text-purple-600 dark:text-purple-400">
                  <HyperText text="ENMANUEL NÚÑEZ" />
                </div>
                <p className="text-xs text-text-secondary mt-3">Efecto glitch de matriz que resuelve el texto.</p>
              </div>

              {/* Blur Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / BlurText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-sky-500/10 text-sky-500 font-semibold">Progresivo</span>
                </div>
                <BlurText
                  text="Diseñando interfaces de alto rendimiento y backends distribuidos."
                  className="text-sm font-medium"
                />
                <p className="text-xs text-text-secondary mt-3">Transición suave desde desenfoque total hasta máxima nitidez.</p>
              </div>

              {/* Glitch Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / GlitchText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-rose-500/10 text-rose-500 font-semibold">Pasa el cursor</span>
                </div>
                <div className="text-2xl">
                  <GlitchText text="ANOMALÍA_DETECTADA" className="text-text-primary dark:text-white" />
                </div>
                <p className="text-xs text-text-secondary mt-3">Aberración cromática RGB con cortes glitch rápidos.</p>
              </div>

              {/* Typing Animation */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / TypingAnimation</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-500 font-semibold">Escritura</span>
                </div>
                <div className="text-lg font-mono text-amber-600 dark:text-amber-400 min-h-[3rem]">
                  <TypingAnimation text="> Transmitiendo telemetría al rover NASA..." duration={40} />
                </div>
                <p className="text-xs text-text-secondary mt-3">Simulación en vivo de escritura por pulsación con cursor parpadeante.</p>
              </div>

              {/* Word Rotate */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / WordRotate</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-500 font-semibold">Continuo</span>
                </div>
                <div className="text-xl font-bold flex items-center gap-2">
                  <span>Especializado en</span>
                  <WordRotate words={['React 19', 'Next.js Turbopack', 'Python FastAPI', 'Telemetría IoT']} />
                </div>
                <p className="text-xs text-text-secondary mt-3">Rotación continua de palabras con animación suave.</p>
              </div>

              {/* Sparkles Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / SparklesText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-blue-500/10 text-blue-500 font-semibold">Destellos</span>
                </div>
                <div className="text-2xl text-accent-fill font-bold">
                  <SparklesText text="Sistemas Premiados" />
                </div>
                <p className="text-xs text-text-secondary mt-3">Destellos estelares dinámicos alrededor del texto clave.</p>
              </div>

              {/* Shiny Text */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / ShinyText</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-zinc-500/10 text-zinc-500 font-semibold">Metálico</span>
                </div>
                <div className="text-2xl font-bold bg-neutral-900 p-3 rounded-xl text-center">
                  <ShinyText text="INGENIERÍA DE PRECISIÓN" speed={3} />
                </div>
                <p className="text-xs text-text-secondary mt-3">Reflejo metálico fluido estilo presentaciones de Apple.</p>
              </div>

              {/* Number Ticker & CountUp */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-text-tertiary">MagicUI / NumberTicker & CountUp</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-teal-500/10 text-teal-500 font-semibold">Numérico</span>
                </div>
                <div className="flex items-baseline gap-6">
                  <div>
                    <div className="text-4xl font-extrabold text-accent-fill">
                      <NumberTicker value={99.8} decimalPlaces={1} />%
                    </div>
                    <span className="text-xs text-text-secondary">Disponibilidad</span>
                  </div>
                  <div>
                    <div className="text-4xl font-extrabold text-emerald-500">
                      <CountUp to={4} duration={2} />
                    </div>
                    <span className="text-xs text-text-secondary">Finales & NASA</span>
                  </div>
                </div>
                <p className="text-xs text-text-secondary mt-3">Contador progresivo suavizado al entrar en la pantalla.</p>
              </div>

              {/* Gradient ASCII */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] md:col-span-2">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono text-text-tertiary">ReactBits / GradientASCII</span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-500 font-semibold">Retro</span>
                </div>
                <GradientASCII />
                <p className="text-xs text-text-secondary mt-2">Arte ASCII tipográfico con gradiente cromático fluido animado.</p>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 2: TARJETAS Y EFECTOS */}
        {(activeTab === 'all' || activeTab === 'magicui' || activeTab === 'reactbits') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-black/5 dark:border-white/10">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Tarjetas y Micro-Interacciones
              </span>
              <h2 className="text-3xl font-bold mt-1">Tarjetas Interactivas & Resplandores</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Explora haces orbitales de luz, seguimiento radial del cursor y bordes con estelas estelares.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* MagicCard + BorderBeam */}
              <div className="relative">
                <MagicCard className="h-full flex flex-col justify-between" gradientColor="#0071e3">
                  <BorderBeam size={150} duration={8} colorFrom="#0071e3" colorTo="#38bdf8" />
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-accent-fill/10 text-accent-fill flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">MagicCard + BorderBeam</h3>
                    <p className="text-sm text-text-secondary leading-relaxed">
                      Sigue la proximidad del cursor con un resplandor radial mientras un haz orbital recorre el perímetro.
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-xs text-accent-fill font-semibold">
                    <span>Mueve el cursor alrededor</span>
                  </div>
                </MagicCard>
              </div>

              {/* SpotlightCard */}
              <SpotlightCard className="h-full flex flex-col justify-between" spotlightColor="rgba(56, 189, 248, 0.2)">
                <div>
                  <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-500 flex items-center justify-center mb-4">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">SpotlightCard</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    Cálculo especular ReactBits que genera sensación de iluminación sobre cristal esmerilado al interactuar.
                  </p>
                </div>
                <div className="mt-6">
                  <span className="text-xs font-mono text-sky-500 font-semibold">Componente ReactBits</span>
                </div>
              </SpotlightCard>

              {/* StarBorder */}
              <div className="h-full">
                <StarBorder color="#0071e3" speed="3.5s" className="w-full h-full">
                  <div className="p-4 flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center mb-4">
                        <Flame className="w-5 h-5" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">StarBorder</h3>
                      <p className="text-sm text-text-secondary leading-relaxed">
                        Estelas estelares en rotación constante alrededor de los bordes para destacar logros y proyectos clave.
                      </p>
                    </div>
                    <div className="mt-6 text-xs text-indigo-500 font-semibold">
                      Borde orbital estelar
                    </div>
                  </div>
                </StarBorder>
              </div>
            </div>

            {/* Orbiting Circles */}
            <div className="mt-12 p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="max-w-md">
                <span className="text-xs font-mono text-accent-fill uppercase tracking-wider">MagicUI / OrbitingCircles</span>
                <h3 className="text-2xl font-bold mt-1 mb-3">Satélite de Tecnologías</h3>
                <p className="text-sm text-text-secondary leading-relaxed mb-6">
                  Círculos orbitales concéntricos con velocidades y sentidos independientes para ilustrar ecosistemas y herramientas.
                </p>
                <div className="flex items-center gap-3">
                  <Magnet magnetStrength={0.4}>
                    <button className="px-4 py-2 rounded-full bg-accent-fill text-white text-xs font-semibold shadow hover:bg-accent-hover transition-colors">
                      Botón Magnético
                    </button>
                  </Magnet>
                  <span className="text-xs text-text-secondary">← Pasa el cursor (ReactBits Magnet)</span>
                </div>
              </div>

              <div className="relative flex h-[360px] w-full max-w-[360px] items-center justify-center overflow-hidden">
                <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent-fill text-white shadow-xl font-bold text-lg">
                  EM
                </div>

                <OrbitingCircles radius={65} duration={12} iconSize={36}>
                  <Code className="w-4 h-4 text-blue-500" />
                </OrbitingCircles>
                <OrbitingCircles radius={65} duration={12} delay={6} iconSize={36}>
                  <Database className="w-4 h-4 text-emerald-500" />
                </OrbitingCircles>

                <OrbitingCircles radius={135} duration={20} reverse iconSize={38}>
                  <Rocket className="w-4 h-4 text-rose-500" />
                </OrbitingCircles>
                <OrbitingCircles radius={135} duration={20} delay={7} reverse iconSize={38}>
                  <Globe className="w-4 h-4 text-sky-500" />
                </OrbitingCircles>
                <OrbitingCircles radius={135} duration={20} delay={14} reverse iconSize={38}>
                  <Cpu className="w-4 h-4 text-amber-500" />
                </OrbitingCircles>
              </div>
            </div>

            {/* Animated Beam */}
            <div
              ref={beamContainerRef}
              className="mt-12 p-8 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#1c1c1e] relative overflow-hidden"
            >
              <div className="text-center mb-8">
                <span className="text-xs font-mono text-accent-fill uppercase tracking-wider">MagicUI / AnimatedBeam</span>
                <h3 className="text-2xl font-bold mt-1">Flujo de Datos y Canal de Telemetría</h3>
                <p className="text-sm text-text-secondary max-w-lg mx-auto mt-1">
                  Pulso bezier vectorial que representa la transmisión de telemetría desde sensores IoT hacia la nube.
                </p>
              </div>

              <div className="flex items-center justify-around py-8 relative">
                <div
                  ref={beamFromRef}
                  className="w-16 h-16 rounded-2xl bg-bg-alt dark:bg-white/10 border border-black/10 dark:border-white/10 flex flex-col items-center justify-center text-accent-fill shadow-md z-10"
                >
                  <Cpu className="w-6 h-6" />
                  <span className="text-[10px] font-bold mt-1 text-text-primary dark:text-white">Sensor</span>
                </div>

                <div className="w-20 h-20 rounded-2xl bg-accent-fill text-white flex flex-col items-center justify-center shadow-lg z-10">
                  <Zap className="w-8 h-8" />
                  <span className="text-[10px] font-bold mt-1">Broker</span>
                </div>

                <div
                  ref={beamToRef}
                  className="w-16 h-16 rounded-2xl bg-bg-alt dark:bg-white/10 border border-black/10 dark:border-white/10 flex flex-col items-center justify-center text-emerald-500 shadow-md z-10"
                >
                  <Globe className="w-6 h-6" />
                  <span className="text-[10px] font-bold mt-1 text-text-primary dark:text-white">Panel Web</span>
                </div>

                <AnimatedBeam
                  containerRef={beamContainerRef}
                  fromRef={beamFromRef}
                  toRef={beamToRef}
                  curvature={-40}
                  duration={2.5}
                  gradientStartColor="#0071e3"
                  gradientStopColor="#38bdf8"
                />
              </div>
            </div>
          </section>
        )}

        {/* SECTION 3: BOTONES */}
        {(activeTab === 'all' || activeTab === 'magicui') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-black/5 dark:border-white/10">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Acciones y Botones
              </span>
              <h2 className="text-3xl font-bold mt-1">Suite de Botones Interactivos</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Efectos cónicos, resplandores arcoíris, flechas expansivas y ondas táctiles fluidas.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Shimmer Button */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-text-tertiary mb-4">ShimmerButton</span>
                <ShimmerButton background="#0071e3">
                  Explorar Sistemas
                </ShimmerButton>
                <span className="text-xs text-text-secondary mt-4">Barrido cónico de luz giratoria</span>
              </div>

              {/* Rainbow Button */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-text-tertiary mb-4">RainbowButton</span>
                <RainbowButton>
                  Borde Arcoíris
                </RainbowButton>
                <span className="text-xs text-text-secondary mt-4">Gradiente multicolor animado</span>
              </div>

              {/* Interactive Hover Button */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-text-tertiary mb-4">InteractiveHoverButton</span>
                <InteractiveHoverButton text="Contáctame" />
                <span className="text-xs text-text-secondary mt-4">Píldora expansiva con flecha</span>
              </div>

              {/* Ripple Button */}
              <div className="p-6 rounded-2xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] flex flex-col items-center justify-center text-center">
                <span className="text-xs font-mono text-text-tertiary mb-4">RippleButton</span>
                <RippleButton>
                  Clic con Onda
                </RippleButton>
                <span className="text-xs text-text-secondary mt-4">Onda radial expansiva</span>
              </div>
            </div>
          </section>
        )}

        {/* SECTION 4: TERMINAL, MARQUEE & DOCK */}
        {(activeTab === 'all' || activeTab === 'magicui') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-black/5 dark:border-white/10">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Componentes de Estilo
              </span>
              <h2 className="text-3xl font-bold mt-1">Terminal, Marquee y Dock</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Consola para desarrolladores, carrusel infinito y dock estilo macOS.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <TerminalIcon className="w-5 h-5 text-accent-fill" />
                  Terminal de Desarrollador MagicUI
                </h3>
                <Terminal
                  title="mision-atabey-telemetria@produccion ~"
                  lines={[
                    { text: 'systemctl status atabey-telemetry.service', type: 'command' },
                    { text: '● atabey-telemetry.service - Activo (ejecutando) desde NASA Space Apps', type: 'success' },
                    { text: 'curl -s https://api.missionatabey.com/metrics', type: 'command' },
                    { text: '{"sensores_activos": 16, "latencia_ms": 14.2, "paquetes_entregados": "99.98%"}', type: 'output' },
                    { text: 'docker ps --format "{{.Names}}: {{.Status}}"', type: 'command' },
                    { text: 'rover-broker: Up 42 days (healthy)\nfastapi-gateway: Up 42 days (healthy)', type: 'output' },
                  ]}
                />
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-accent-fill" />
                  Bento Grid MagicUI
                </h3>
                <BentoGrid className="auto-rows-[11rem] grid-cols-2 gap-4">
                  <BentoCard
                    name="NASA Space Apps"
                    Icon={Rocket}
                    description="2 veces finalista global con sistemas de telemetría."
                    cta="Ver Estudio"
                    href="/es/work/mission-atabey"
                  />
                  <BentoCard
                    name="omegaUp GSoC"
                    Icon={Code}
                    description="Contribuidor de código abierto en Google Summer of Code."
                    cta="Ver Blog"
                    href="/es/blog"
                  />
                  <BentoCard
                    name="Diseño de Sistemas"
                    Icon={Cpu}
                    description="APIs escalables, seguridad basada en roles y streaming de eventos."
                    className="col-span-2"
                  />
                </BentoGrid>
              </div>
            </div>

            <div className="rounded-3xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] p-6 overflow-hidden">
              <span className="text-xs font-mono text-text-tertiary block mb-4 text-center">
                MagicUI / Marquee Infinito con Pausa al Hover
              </span>
              <Marquee pauseOnHover duration="25s">
                {['React 19', 'Next.js 16', 'TypeScript', 'Tailwind CSS v4', 'Python', 'FastAPI', 'PostgreSQL', 'Docker', 'Telemetría IoT', 'Arquitectura de Sistemas'].map((tech) => (
                  <div
                    key={tech}
                    className="flex items-center gap-2 rounded-full border border-black/10 dark:border-white/15 bg-white dark:bg-zinc-800 px-5 py-2.5 shadow-sm text-sm font-semibold"
                  >
                    <CheckCircle className="w-4 h-4 text-accent-fill" />
                    <span>{tech}</span>
                  </div>
                ))}
              </Marquee>
            </div>

            <div className="mt-8 flex flex-col items-center justify-center p-6 rounded-3xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617]">
              <span className="text-xs font-mono text-text-tertiary mb-4">MagicUI / Dock Interactivo</span>
              <Dock>
                <DockIcon label="GitHub">
                  <a href="https://github.com/mxnueh" target="_blank" rel="noopener noreferrer">
                    <GithubIcon className="w-5 h-5" />
                  </a>
                </DockIcon>
                <DockIcon label="LinkedIn">
                  <a href="https://www.linkedin.com/in/enmanuel-nunez-matias-249560340/" target="_blank" rel="noopener noreferrer">
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </DockIcon>
                <DockIcon label="Email">
                  <a href="mailto:enmanuelnunezmatias@gmail.com">
                    <Mail className="w-5 h-5" />
                  </a>
                </DockIcon>
                <DockIcon label="Proyectos">
                  <a href="/es/work">
                    <Rocket className="w-5 h-5" />
                  </a>
                </DockIcon>
              </Dock>
            </div>
          </section>
        )}

        {/* SECTION 5: FONDOS Y LIENZOS */}
        {(activeTab === 'all' || activeTab === 'reactbits' || activeTab === 'magicui') && (
          <section className="py-16 px-6 max-w-7xl mx-auto w-full border-t border-black/5 dark:border-white/10">
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs uppercase font-bold tracking-widest text-accent-fill">
                Lienzos y Fondos Atmosféricos
              </span>
              <h2 className="text-3xl font-bold mt-1">Fondos de Partículas y Lienzos</h2>
              <p className="text-text-secondary dark:text-gray-400 text-sm mt-1">
                Simulaciones HTML5 Canvas de alto rendimiento: Retro Grid, Partículas, Olas, Cuadrícula Parpadeante, Meteoros e Hiperespacio.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Retro Grid */}
              <div className="relative h-64 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-black overflow-hidden p-6 flex flex-col justify-between">
                <RetroGrid />
                <span className="relative z-10 text-xs font-mono text-text-tertiary">MagicUI / RetroGrid</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">Perspectiva Wireframe 3D</h4>
                  <p className="text-xs text-text-secondary">Cuadrícula en perspectiva móvil retro-futurista.</p>
                </div>
              </div>

              {/* ReactBits Particles */}
              <div className="relative h-64 rounded-3xl border border-black/10 dark:border-white/10 bg-bg-alt dark:bg-[#161617] overflow-hidden p-6 flex flex-col justify-between">
                <Particles quantity={40} color="#0071e3" />
                <span className="relative z-10 text-xs font-mono text-text-tertiary">ReactBits / Particles</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">Malla de Partículas Interactiva</h4>
                  <p className="text-xs text-text-secondary">Nodos enlazados que reaccionan a la proximidad del cursor.</p>
                </div>
              </div>

              {/* ReactBits Shape Waves */}
              <div className="relative h-64 rounded-3xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#161617] overflow-hidden p-6 flex flex-col justify-between">
                <ShapeWaves waveColor="#0071e3" speed={0.02} />
                <span className="relative z-10 text-xs font-mono text-text-tertiary">ReactBits / ShapeWaves</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold">Ondas Sinusoidales en Capas</h4>
                  <p className="text-xs text-text-secondary">Simulación armónica continua con degradado de transparencia.</p>
                </div>
              </div>

              {/* Flickering Grid + Meteors */}
              <div className="relative h-64 rounded-3xl border border-black/10 dark:border-white/10 bg-black text-white overflow-hidden p-6 flex flex-col justify-between">
                <FlickeringGrid color="rgb(56, 189, 248)" maxOpacity={0.25} />
                <Meteors number={15} />
                <span className="relative z-10 text-xs font-mono text-white/50">MagicUI / FlickeringGrid + Meteors</span>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-white">Matriz Cibernética & Meteoros</h4>
                  <p className="text-xs text-white/60">Estrellas fugaces sobre lienzo dinámico parpadeante.</p>
                </div>
              </div>
            </div>

            {/* Hyperspeed Demo */}
            <div className="mt-8 relative h-72 rounded-3xl border border-white/10 overflow-hidden p-8 flex flex-col justify-between text-white">
              <Hyperspeed speed={6} starCount={250} />
              <span className="relative z-10 text-xs font-mono text-white/60">ReactBits / Hyperspeed</span>
              <div className="relative z-10 text-center max-w-xl mx-auto">
                <h4 className="text-3xl font-extrabold tracking-tight">Velocidad Hiperespacial</h4>
                <p className="text-sm text-white/80 mt-2">
                  Trazos de luz con perspectiva simulando aceleración interestelar para sistemas aeroespaciales.
                </p>
              </div>
              <div className="relative z-10 text-center">
                <ShimmerButton href="/es/work/mission-atabey" background="rgba(255,255,255,0.15)">
                  Ver Telemetría de Misión Atabey
                </ShimmerButton>
              </div>
            </div>
          </section>
        )}

        <div className="chapter-dark">
          <SiteFooter lang="es" />
        </div>
      </div>
    </ClickSpark>
  );
}
